import * as React from "react";
import axios from "axios";

const authContext = React.createContext();

function useAuth() {
	const [authed, setAuthed] = React.useState(false);

	return {
		authed,
		login(email, password) {
			return new Promise((resolve, reject) => {
				console.log("waiting");
				axios({
					method: "POST",
					url: "http://localhost:5001/api/users/login",
					data: {
						email: email,
						password: password,
					},
				})
					.then(function (response) {
						if (response.statusText === "OK") {
							setAuthed(true);
							console.log("success", "Logged in successfully!");
							resolve("logged in");
						}
						console.log(response);
					})
					.catch(function (error) {
						console.log("error", error.response.data.message);
						reject("not logged in");
					});
			});
		},
		logout() {
			return new Promise((res) => {
				setAuthed(false);
				res();
			});
		},
	};
}

export function AuthProvider({ children }) {
	const auth = useAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
	return React.useContext(authContext);
}
