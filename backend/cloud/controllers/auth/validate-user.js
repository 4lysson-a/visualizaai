Parse.Cloud.define("validateUser", async (request) => {
  const sub = request.params.sub;

  if (!sub) {
    throw new Error("sub is required");
  }

  try {
    const query = new Parse.Query(Parse.User);
    query.equalTo("sub", sub);

    const user = await query.first({
      useMasterKey: true,
    });

    if (!user) {
      return {
        state: "CREATE_ACCOUNT",
      };
    }

    const newKey = [...Array(22), sub]
      .map(() => Math.random().toString(36)[2])
      .join("");

    user.set("password", newKey);
    await user.save(null, { useMasterKey: true });

    return { state: "ACCOUNT_VALIDATED", key: newKey };
  } catch (error) {
    throw new Error("Error fetching user: " + error.message);
  }
});
