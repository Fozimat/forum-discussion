/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should handle confirm password typing correctly
 *   - should call register function when register button is clicked
 */

import React from "react";
import { describe, it, vi, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import { BrowserRouter } from "react-router-dom";
import RegisterInput from "./RegisterInput";

expect.extend(matchers);

describe("RegisterInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle name typing correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterInput register={() => {}} />
      </BrowserRouter>
    );
    const nameInput = await screen.getByLabelText("Name");

    await userEvent.type(nameInput, "sahabat mindi");

    expect(nameInput).toHaveValue("sahabat mindi");
  });

  it("should handle email typing correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterInput register={() => {}} />
      </BrowserRouter>
    );
    const emailInput = await screen.getByLabelText("Email");

    await userEvent.type(emailInput, "sahabatmindi@gmail.com");

    expect(emailInput).toHaveValue("sahabatmindi@gmail.com");
  });

  it("should handle password typing correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterInput register={() => {}} />
      </BrowserRouter>
    );
    const passwordInput = await screen.getByLabelText("Password");

    await userEvent.type(passwordInput, "123456");

    expect(passwordInput).toHaveValue("123456");
  });

  it("should handle confirm password typing correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterInput register={() => {}} />
      </BrowserRouter>
    );
    const confirmPasswordInput = await screen.getByLabelText(
      "Confirm Password"
    );

    await userEvent.type(confirmPasswordInput, "123456");

    expect(confirmPasswordInput).toHaveValue("123456");
  });

  it("should call register function when register button is clicked", async () => {
    const mockRegister = vi.fn();
    render(
      <BrowserRouter>
        <RegisterInput register={mockRegister} />
      </BrowserRouter>
    );
    const nameInput = await screen.getByLabelText("Name");
    await userEvent.type(nameInput, "sahabat mindi");
    const emailInput = await screen.getByLabelText("Email");
    await userEvent.type(emailInput, "sahabatmindi@gmail.com");
    const passwordInput = await screen.getByLabelText("Password");
    await userEvent.type(passwordInput, "123456");
    const confirmPasswordInput = await screen.getByLabelText(
      "Confirm Password"
    );
    await userEvent.type(confirmPasswordInput, "123456");
    const registerButton = await screen.getByRole("button", {
      name: "Register",
    });

    await userEvent.click(registerButton);

    expect(mockRegister).toBeCalledWith({
      name: "sahabat mindi",
      email: "sahabatmindi@gmail.com",
      password: "123456",
    });
  });
});
