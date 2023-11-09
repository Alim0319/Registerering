// userActions.js
import axios from "axios";
// Dette er en enkel eksempelhandling for registrering
export const registerUser = (userData) => (dispatch) => {
  // Her kan du legge til koden for å sende brukerdata til serveren
  // For eksempel, bruk Axios til å gjøre en POST-forespørsel til serveren
  // Når serveren svarer, kan du utføre handlinger som å lagre brukerdata i Redux.

  // Eksempel:
  axios
    .post("http://localhost:3500/register", userData)
    .then((response) => {
      // Håndter vellykket registrering her
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      // Håndter feilregistrering her
      dispatch({ type: "REGISTER_FAILURE", payload: error });
    });
};
