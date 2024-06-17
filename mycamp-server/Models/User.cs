namespace Server.Models;

public class User : AuthUser {
	public string Role { get; set; } = "user";
	public required string Name { get; set; }
	public required string Surname { get; set; }
	public required string Country { get; set; }
	public required string Phone { get; set; }
	public required DateTime Birthdate { get; set; }
	public string? Gender { get; set; }
	public DateTime? CreatedAt { get; set; }
	public required bool Active { get; set; }
	public required int ProfilePicID { get; set; }
}
