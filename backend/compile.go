// backend/compile.go
package main

import (
  "encoding/json"
  "fmt"
  "io/ioutil"
  "os/exec"
)

func compileAndRun(code string) (string, error) {
  // Write the C code to a temporary file.
  tmpfile, err := ioutil.TempFile("", "c-compiler-")
  if err != nil {
    return "", fmt.Errorf("error creating temporary file: %v", err)
  }
  defer tempfile.Close()

  fmt.Fprintln(tmpfile, code)

  // Compile the C code.
  cmd := exec.Command("clang", "-o", "a.out", tempfile.Name())
  err = cmd.Run()
  if err != nil {
    return "", fmt.Errorf("error compiling C code: %v", err)
  }

  // Run the compiled C code.
  cmd = exec.Command("./a.out")
  output, err := cmd.CombinedOutput()
  if err != nil {
    return "", fmt.Errorf("error running C code: %v", err)
  }

  return string(output), nil
}
