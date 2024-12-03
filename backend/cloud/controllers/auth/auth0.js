Parse.Cloud.define("validateUser", async (request) => {
  const token = request.params.auth;

  if (!token) {
    throw new Error("auth0 is required");
  }

  try {
    const query = new Parse.Query(Parse.User);
    query.equalTo("auth0", token);

    const user = await query.first({
      useMasterKey: true,
    });

    if (!user) {
      return {
        state: "CREATE_ACCOUNT",
      };
    }

    const newKey = [...Array(22)]
      .map(() => Math.random().toString(36)[2])
      .join("");
    user.set("password", newKey);
    await user.save(null, { useMasterKey: true });

    return { state: "ACCOUNT_VALIDATED", key: newKey };
  } catch (error) {
    throw new Error("Error fetching user: " + error.message);
  }
});
