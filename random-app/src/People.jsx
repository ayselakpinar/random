function People() {
    const people = [
      { name: "Aysel", age: 28 },
      { name: "Anil", age: 29 },
      { name: "Ay", age: 41 },
    ];
  
    return (
      <div>
        {people.map((person) => (
          <div>
            <h1>{person.name}</h1>
            <p>{person.age}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default People;
  
