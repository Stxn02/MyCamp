using Server.Interfaces;
using Server.Models;
using Server.Utils;
using System.Data;
using Dapper;

namespace Server.Services;

public class UserService(IDbConnection db) : IUserService {
	private readonly IDbConnection Db = db;
	private readonly FormHelper Form = new();
	
	public Admin? AuthenticateAdmin(User user) {
		string selectQuery = "SELECT * FROM admins WHERE userID = @id;";
		var admin = Db.QueryFirstOrDefault<Admin?>(selectQuery, user);
		return admin;
	}
	public bool UpdateUser(User user) {
		Form.AdjustFields(user);
		Form.RespectFormFormats(user);
		if (!AvailableIdentifiers(user)) {
			throw new InvalidOperationException("User already exists");
		}

		user.Active = true;
		user.Password = Form.HashPassword(user.Password);
		string updateQuery = GetUserUpdateQuery();
		return Db.Execute(updateQuery, user) > 0;
	}
	public bool DisableUser(int userID) {
		string updateQuery = "UPDATE users SET active = 0 WHERE id = @id;";
		return Db.Execute(updateQuery, new { id = userID }) > 0;
	}

	#region Aid Functions
		
		private static string GetUserUpdateQuery() {
			return @$"
				UPDATE users 
				SET name = @name, surname = @surname, username = @username, country = @country, 
						email = @email, password = @password, phone = @phone, birthdate = @birthdate, 
						gender = @gender, profilePicID = @profilePicID
				WHERE id = @id
			";
		}
		private bool AvailableIdentifiers(User user) {
			string selectQuery = "SELECT * FROM users WHERE id != @id AND (username = @username OR email = @email);";
			var foundUser = Db.QueryFirstOrDefault<User?>(selectQuery, user);
			return foundUser == null;
		}

	#endregion
}
