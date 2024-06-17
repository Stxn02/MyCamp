using System.Text;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Identity;
using Server.Models;

namespace Server.Utils;

public class FormHelper {
	private readonly PasswordHasher<object> passwordHasher;
	private static readonly Dictionary<string, string> StateToCodeMap = new(StringComparer.OrdinalIgnoreCase) {
			{ "alabama", "AL" },
			{ "alaska", "AK" },
			{ "arizona", "AZ" },
			{ "arkansas", "AR" },
			{ "california", "CA" },
			{ "colorado", "CO" },
			{ "connecticut", "CT" },
			{ "delaware", "DE" },
			{ "florida", "FL" },
			{ "georgia", "GA" },
			{ "hawaii", "HI" },
			{ "idaho", "ID" },
			{ "illinois", "IL" },
			{ "indiana", "IN" },
			{ "iowa", "IA" },
			{ "kansas", "KS" },
			{ "kentucky", "KY" },
			{ "louisiana", "LA" },
			{ "maine", "ME" },
			{ "maryland", "MD" },
			{ "massachusetts", "MA" },
			{ "michigan", "MI" },
			{ "minnesota", "MN" },
			{ "mississippi", "MS" },
			{ "missouri", "MO" },
			{ "montana", "MT" },
			{ "nebraska", "NE" },
			{ "nevada", "NV" },
			{ "new hampshire", "NH" },
			{ "new jersey", "NJ" },
			{ "new mexico", "NM" },
			{ "new york", "NY" },
			{ "north carolina", "NC" },
			{ "north dakota", "ND" },
			{ "ohio", "OH" },
			{ "oklahoma", "OK" },
			{ "oregon", "OR" },
			{ "pennsylvania", "PA" },
			{ "rhode island", "RI" },
			{ "south carolina", "SC" },
			{ "south dakota", "SD" },
			{ "tennessee", "TN" },
			{ "texas", "TX" },
			{ "utah", "UT" },
			{ "vermont", "VT" },
			{ "virginia", "VA" },
			{ "washington", "WA" },
			{ "west virginia", "WV" },
			{ "wisconsin", "WI" },
			{ "wyoming", "WY" }
    };

	public FormHelper(){
		passwordHasher = new PasswordHasher<object>();
	}

	public string? GetStateCode(string stateName){
		StateToCodeMap.TryGetValue(stateName, out string? stateCode);
		return stateCode;
	}	
	public string HashPassword(string password) {
		var hashedPassword = passwordHasher.HashPassword(new {}, password);
		return hashedPassword;
	}
	public bool VerifyPassword(string hashedPassword, string password) {
		var verificationResult = passwordHasher.VerifyHashedPassword(new {}, hashedPassword, password);
		return verificationResult == PasswordVerificationResult.Success;
	}
	public bool CheckNameAndCountryFormat(string name, string surname, string country) {
		string pattern = @"^[a-zA-Z]+$";
		return Regex.IsMatch(name, pattern) 
		&& Regex.IsMatch(surname, pattern) 
		&& Regex.IsMatch(country, pattern);
	}
	public bool CheckUsernameFormat(string username) {
		string pattern = @"^[a-zA-Z0-9_]+$";
		return Regex.IsMatch(username, pattern);
	}
	public bool CheckEmailFormat(string email) {
		string pattern = @"^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$";
		return Regex.IsMatch(email, pattern);
	}
	public bool CheckPasswordFormat(string password) {
		string pattern = @"^(?=.*[0-9])(?=.*[!@#*?])(?=.*[A-Z])(?=.*[a-z]).*[^\s'"";$%<>|`^~\\]+$";
		return Regex.IsMatch(password, pattern) && password.Length >= 8;
	}
	public bool CheckPhoneFormat(string phone) {
		string pattern = @"^^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$";
		return Regex.IsMatch(phone, pattern);
	}
	public bool CheckGenderFormat(string gender) {
		return string.Equals(gender, "m") || string.Equals(gender, "f");
	}
	public void RespectFormFormats(User user) {
		RespectNameAndContryFormat(user.Name, user.Surname, user.Country);
		RespectUsernameFormat(user.Username);
		RespectEmailFormat(user.Email);
		RespectPasswordFormat(user.Password);
		RespectPhoneFormat(user.Phone);
		if (user.Gender != null) RespectGenderFormat(user.Gender);
	}
	public void RespectNameAndContryFormat(string name, string surname, string country) {
		if (!CheckNameAndCountryFormat(name, surname, country)) {
			throw new ArgumentException("Name or surname or country does not respect format");
		}
	}
	public void RespectUsernameFormat(string username) {
		if (!CheckUsernameFormat(username)) {
			throw new ArgumentException("Username does not respect format");
		}
	}
	public void RespectEmailFormat(string email) {
		if (!CheckEmailFormat(email)) {
			throw new ArgumentException("Email does not respect format");
		}
	}
	public void RespectPasswordFormat(string password) {
		if (!CheckPasswordFormat(password)) {
			throw new ArgumentException("Password does not respect format");
		}
	}
	public void RespectPhoneFormat(string phone) {
		if (!CheckPhoneFormat(phone)) {
			throw new ArgumentException("Phone does not respect format");
		}
	}
	public void RespectGenderFormat(string gender) {
		if (!CheckGenderFormat(gender)) {
			throw new ArgumentException("Gender does not respect format");
		}
	}
	public void AdjustFields(User user) {
		user.Email = user.Email.ToLower().Trim();
		user.Username = user.Username.ToLower().Trim();
		user.Name = user.Name.ToLower().Trim();
		user.Surname = user.Surname.ToLower().Trim();
		user.Country = user.Country.ToLower().Trim();
		user.Gender = user.Gender?.ToLower().Trim();
		user.Phone = user.Phone.Replace(" ", "");
	}
	public string EscapeQuotes(string input) {
		if (string.IsNullOrEmpty(input)) return input;
		
		var sb = new StringBuilder(input.Length);
		foreach (char c in input) {
			switch (c){
				case '"':
					sb.Append("\\\"");
					break;
				case '\'':
					sb.Append("\\'");
					break;
				default:
					sb.Append(c);
					break;
			}
		}

		return sb.ToString();
	}
}
