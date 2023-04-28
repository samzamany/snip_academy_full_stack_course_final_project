useEffect(() => {
  fetch("http://localhost:5000/api/projects")
    .then((res) => res.json())
    .then((data) => setProjects(data));
}, []);
