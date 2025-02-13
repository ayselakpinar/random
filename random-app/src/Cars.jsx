function Cars() {
  const Cars = ['Toyota', 'BMW', 'Ford', 'Mercedes', 'Tesla'];
  const carsPTags = Cars.map((car) => <p>{car}</p>);
  return <>{carsPTags}</>;
}
export default Cars;
