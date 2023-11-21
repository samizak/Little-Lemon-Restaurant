import "@testing-library/jest-dom";
import { screen, render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ReservationsPage from "../components/ReservationsPage";
import Form from "../components/Form";

describe("Reservations Page Component", () => {
  it("Should render Reservations Page component", () => {
    render(
      <MemoryRouter>
        <ReservationsPage />
      </MemoryRouter>
    );

    const heroElement = screen.getByTestId("reservation-title");
    expect(heroElement).toHaveTextContent("Experience the perfect balance of tradition and luxury.");
  });
});

describe("Testing Reservation Form", () => {
  it("should test full name", async () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const fullNameError = screen.getAllByTestId("full-name-error");
    const requiredRadioOption = screen.getByTestId("submit-button");

    fireEvent.click(requiredRadioOption);

    await waitFor(() => {
      console.log(fullNameError[0].textContent);
      expect(fullNameError[0].textContent).toEqual("Full name is a required field!");
    });
  });

  it("should test Email", async () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const fullNameError = screen.getAllByTestId("email-error");
    const requiredRadioOption = screen.getByTestId("submit-button");

    fireEvent.click(requiredRadioOption);

    await waitFor(() => {
      console.log(fullNameError[0].textContent);
      expect(fullNameError[0].textContent).toEqual("Email is a required field!");
    });
  });

  it("should test Telephone", async () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const fullNameError = screen.getAllByTestId("telephone-error");
    const requiredRadioOption = screen.getByTestId("submit-button");

    fireEvent.click(requiredRadioOption);

    await waitFor(() => {
      console.log(fullNameError[0].textContent);
      expect(fullNameError[0].textContent).toEqual("Telephone is a required field!");
    });
  });
});
