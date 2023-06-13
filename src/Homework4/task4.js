export function objects() {
  let user = {
    name: "John",
  };

  const ageInput = prompt("How old are you?");
  user.age = ageInput;

  const admin = Object.create(user);
  admin.role = "admin";
  const { name, age, role } = admin;
  console.log(`name, age, role: ${name} ${age} ${role}`);
}
