async function useFetch(query, variables = {}) {
  try {
    const request = await fetch("http://localhost:1337/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    });

    const response = await request.json();
    let success = true;

    if (response.errors) {
      success = false;
    }

    return { success: success, ...response };
  } catch (error) {
    return { success: false, error };
  }
}

export { useFetch };
