// Should not signup user with invalid name/email/password
test("Should not signup user with invalid name", async () => {
  await request(app)
    .post("/users")
    .send({
      email: "test1@example.com",
      password: "test1233",
    })
    .expect(400);
});

test("Should not signup user with invalid email", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "marwa",
      email: "test1.com",
      password: "test1233",
    })
    .expect(400);
});

test("Should not signup user with invalid password", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "marwa",
      email: "marwa@eample.com",
      password: "123Password",
    })
    .expect(400);
});

// Not update user if unauthenticated
test("Should not update user if unauthenticated", async () => {
  await request(app)
    .patch("/users/me")
    .send({
      name: "marwa",
    })
    .expect(401);
});

// Should not update user with invalid name/email/password
test("Should not update user with invalid name", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      name: "",
    })
    .expect(400);
});

test("Should not update user with invalid email", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      email: "@example.com",
    })
    .expect(400);
});

test("Should not update user with invalid password", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      password: "worstpassword123",
    })
    .expect(400);
});

// Should not delete user if unauthenticated
test("Should not delete account for unauthenticated user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", ``)
    .send()
    .expect(401);
});
