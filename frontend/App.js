// frontend/App.js
import React, { useState } from "react";
import { Button, CodeEditor } from "./components";

const App = () => {
  const [code, setCode] = useState("");

  const compileAndRun = async () => {
    // Use a load balancer to distribute traffic across multiple backend servers.
    const backendURL = await getBackendURL();

    // Send the C code to the backend for compilation and execution.
    const response = await fetch(`${backendURL}/compile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
      }),
    });

    // Get the output of the C code from the response.
    const output = await response.json();

    // Display the output to the user.
    console.log(output);
  };

  // Use a caching mechanism to store the compiled output of frequently used code.
  const [cache, setCache] = useState({});

  const getCachedOutput = async (code) => {
    if (cache[code]) {
      return cache[code];
    }

    const output = await compileAndRun(code);
    cache[code] = output;
    return output;
  };

  return (
    <div>
      <h1>Web-based C Compiler</h1>
      <CodeEditor value={code} onChange={(code) => setCode(code)} />
      <Button onClick={() => getCachedOutput(code)}>Compile and Run</Button>
    </div>
  );
};

export default App;
