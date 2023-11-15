async function strapiTest() {
    const url = `http://localhost:1337/api/tests/`
    const response = EleventyFetch(url, {
        duration: "1d",
        type: "json"
    });
    const Test = response
    return Test;
};