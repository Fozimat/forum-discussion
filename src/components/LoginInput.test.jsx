/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from "react";
import { describe, it, vi, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import { BrowserRouter } from "react-router-dom";
import LoginInput from "./LoginInput";

expect.extend(matchers);

describe("LoginInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle email typing correctly", async () => {
    render(
      <BrowserRouter>
        <LoginInput login={() => {}} />
      </BrowserRouter>
    );
    const emailInput = await screen.getByLabelText("Email");

    await userEvent.type(emailInput, "sahabatmindi@gmail.com");

    expect(emailInput).toHaveValue("sahabatmindi@gmail.com");
  });

  it("should handle password typing correctly", async () => {
    render(
      <BrowserRouter>
        <LoginInput login={() => {}} />
      </BrowserRouter>
    );
    const passwordInput = await screen.getByLabelText("Password");

    await userEvent.type(passwordInput, "123456");

    expect(passwordInput).toHaveValue("123456");
  });

  it("should call login function when login button is clicked", async () => {
    const mockLogin = vi.fn();
    render(
      <BrowserRouter>
        <LoginInput login={mockLogin} />
      </BrowserRouter>
    );
    const emailInput = await screen.getByLabelText("Email");
    await userEvent.type(emailInput, "sahabatmindi@gmail.com");
    const passwordInput = await screen.getByLabelText("Password");
    await userEvent.type(passwordInput, "123456");
    const loginButton = await screen.getByRole("button", { name: "Login" });

    await userEvent.click(loginButton);

    expect(mockLogin).toBeCalledWith({
      email: "sahabatmindi@gmail.com",
      password: "123456",
    });
  });
});
