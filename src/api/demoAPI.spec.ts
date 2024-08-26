import { test, expect } from "@playwright/test";

test("API GET METHOD", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");

  const response_body = await response.json();

  console.log(`the Response :`, await response.json());

  console.log("=====> : ", response.statusText());
});
