// not create task with invalid description/completed
test("Should not create task with invalid description", async () => {
  await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: "",
    })
    .expect(400);
});

test("Should not create task with invalid completed", async () => {
  await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: "test invalid completed",
      completed: 1234,
    })
    .expect(400);
});

// not update task with invalid description/completed
test("Should not update task with invalid description", async () => {
  await request(app)
    .patch(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: "",
    })
    .expect(500);
});

test("Should not update task with invalid completed", async () => {
  await request(app)
    .patch(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      completed: 1234,
    })
    .expect(500);
});

// delete user task
test("Should delete user task", async () => {
  const response = await request(app)
    .delete(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const task = await Task.findById(response.body._id);
  expect(task).toBeNull();
});

// Should not delete task if unauthenticated
test("Should delete user task", async () => {
  const response = await request(app)
    .delete(`/tasks/${taskOne._id}`)
    .send()
    .expect(401);
});

// not update other users task
test("Should not update other users task", async () => {
  await request(app)
    .patch(`/tasks/${taskTwo._id}`)
    .set("Authorization", `Bearer ${userTwo.tokens[0].token}`)
    .send({
      description: "test not update other users task",
    })
    .expect(404);
});

// fetch user task by id
test("Should fetch user task by id", async () => {
  const response = await request(app)
    .get(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const task = await Task.findById(response.body._id);
  expect(task.description).toEqual("First Task");
});

// not fetch user task by id if unauthenticated
test("Should not fetch user task by id if unauthenticated", async () => {
  const response = await request(app)
    .get(`/tasks/${taskOne._id}`)
    .send()
    .expect(401);
});

// not fetch other users task by id
test("Should not fetch other users task by id", async () => {
  const response = await request(app)
    .get(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userTwo.tokens[0].token}`)
    .send()
    .expect(404);
});

// Should fetch only completed tasks
test("fetch only completed tasks", async () => {
  const response = await request(app)
    .get("/tasks?completed=true")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toEqual(1);
});

// Should fetch only incomplete tasks
test("fetch only incompleted tasks", async () => {
  const response = await request(app)
    .get("/tasks?completed=false")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toEqual(1);
});

// sort tasks by description/completed/createdAt/updatedAt
test("Should sort tasks by description", async () => {
  const response = await request(app)
    .get("/tasks?sortBy=description:desc")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body[0].description).toEqual("Second Task");
});

test("Should sort tasks by completed", async () => {
  const response = await request(app)
    .get("/tasks?sortBy=completed:desc")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body[0].description).toEqual("Second Task");
});

test("Should sort tasks by createdAt", async () => {
  const response = await request(app)
    .get("/tasks?sortBy=createdAt:desc")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body[0].description).toEqual("Second Task");
});

test("Should sort tasks by updatedAt", async () => {
  const response = await request(app)
    .get("/tasks?sortBy=updatedAt:desc")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body[0].description).toEqual("Second Task");
});

// fetch page of tasks
test("Should fetch page of tasks", async () => {
  const response = await request(app)
    .get("/tasks?sortBy=createdAt:desc&limit=1&skip=1")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body[0].description).toEqual("First Task");
});
