// backend/main.go
package main

import (
  "encoding/json"
  "fmt"
  "net/http"

  "github.com/gorilla/mux"
  "github.com/labstack/echo"
)

func main() {
  // Create a router.
  router := mux.NewRouter()

  // Register the compile endpoint.
  router.HandleFunc("/compile", compile).Methods("POST")

  // Start the server.
  fmt.Println("Starting server on port 8080...")
  http.ListenAndServe(":8080", router)
}
