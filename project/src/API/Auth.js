export async function SignUpFetch(user) {
  const resp = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    }
  );
  if (resp.ok) {
    return await resp.json();
  }
  throw new Error("404: The registration process failed!");
}
