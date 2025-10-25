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

//   return (
//     <View padding="1rem">
//       <Flex direction="row" justifyContent="space-between" alignItems="center">
//         <Heading level={3}>Profiles App</Heading>
//         <Flex gap="0.5rem" alignItems="center">
//           <span style={{ opacity: 0.8 }}>
//             Signed in as <b>{user?.username || user?.signInDetails?.loginId}</b>
//           </span>
//           <Button onClick={signOut} variation="destructive">
//             Sign out
//           </Button>
//         </Flex>
//       </Flex>

//       <Divider marginTop="1rem" marginBottom="1rem" />

//       {/* Create form */}
//       <Flex as="form" gap="0.75rem" wrap="wrap" onSubmit={(e) => e.preventDefault()}>
//         <TextField
//           label="Name"
//           labelHidden
//           placeholder="Full name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           width="20rem"
//         />
//         <TextField
//           label="Email"
//           labelHidden
//           placeholder="email@example.com"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           width="22rem"
//         />
//         <Button variation="primary" onClick={addProfile}>
//           Add Profile
//         </Button>
//       </Flex>

//       <Divider marginTop="1rem" marginBottom="1rem" />

//       {/* Profiles grid */}
//       <Grid
//         templateColumns={{ base: "1fr", medium: "1fr 1fr", large: "1fr 1fr 1fr" }}
//         gap="1rem"
//       >
//         {userProfiles.length === 0 ? (
//           <View opacity={0.7}>No profiles yet. Add one above.</View>
//         ) : (
//           userProfiles.map((p) => (
//             <Card key={p.id} className="card">
//               <Heading level={5} style={{ marginBottom: "0.5rem" }}>
//                 {p.name}
//               </Heading>
//               <div className="read-the-docs">{p.email}</div>
//               <Divider marginTop="0.75rem" marginBottom="0.75rem" />
//               <Button size="small" onClick={() => removeProfile(p.id)}>
//                 Delete
//               </Button>
//             </Card>
//           ))
//         )}
//       </Grid>
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