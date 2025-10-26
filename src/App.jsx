// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           {'Panda Express'}<span role="img" aria-label="Panda">🐼</span> {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.jsx
// import { useState, useEffect } from "react";
// import {
//   Button,
//   Heading,
//   Flex,
//   View,
//   Grid,
//   Divider,
//   TextField,
//   Card,
// } from "@aws-amplify/ui-react";
// import { useAuthenticator } from "@aws-amplify/ui-react";
// import { Amplify } from "aws-amplify";
// import "@aws-amplify/ui-react/styles.css";
// import { generateClient } from "aws-amplify/data";
// import outputs from "../amplify_outputs.json";

// // Configure Amplify with your generated outputs
// Amplify.configure(outputs);

// // Create a client for Amplify Data (Gen 2)
// const client = generateClient({
//   authMode: "userPool", // require login
// });

// export default function App() {
//   const [userProfiles, setUserProfiles] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const { user, signOut } = useAuthenticator((context) => [context.user]);

//   // Load profiles on mount
//   useEffect(() => {
//     let isMounted = true;
//     const load = async () => {
//       try {
//         const { data } = await client.models.UserProfile.list({
//           // optional: limit, nextToken, filters, etc.
//         });
//         if (isMounted) setUserProfiles(data ?? []);
//       } catch (err) {
//         console.error("Failed to fetch profiles:", err);
//       }
//     };
//     load();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   // Create a new profile
//   const addProfile = async () => {
//     if (!name.trim() || !email.trim()) return;
//     try {
//       const { data: created } = await client.models.UserProfile.create({
//         name,
//         email,
//       });
//       setUserProfiles((prev) => [created, ...prev]);
//       setName("");
//       setEmail("");
//     } catch (err) {
//       console.error("Create failed:", err);
//     }
//   };

//   // Delete a profile
//   const removeProfile = async (id) => {
//     try {
//       await client.models.UserProfile.delete({ id });
//       setUserProfiles((prev) => prev.filter((p) => p.id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err);
//     }
//   };

//     return (
//     <View className="profile">
//       <Heading level={1} className="title">
//         My Profile
//       </Heading>

//       <Divider className="rule" />

//       <Flex justifyContent="center" marginTop="4rem">
//         <Button variation="primary" size="large" onClick={signOut}>
//           Sign Out
//         </Button>
//       </Flex>
//     </View>
//   );

// }

// src/App.jsx this is working
import React from "react";
import { View, Heading, Divider, Button, Flex } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./index.css";



export default function App() {
  const { signOut } = useAuthenticator();

  return (
    <View className="profile">
      <Heading level={1} className="title">
        My Profile
      </Heading>

      <Divider className="rule" />

      <Flex justifyContent="center" marginTop="4rem">
        <Button variation="primary" size="large" onClick={signOut}>
          Sign Out
        </Button>
      </Flex>
    </View>
  );
}