// 1121_10시 수업_context

// const App = () => {
//   return (
//     <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
//   );
// };

// const HelloLicat = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h2>{props.value.id}</h2>
//       <strong>{props.value.name}</strong>
//       <HelloLicatTwo value={{name:props.value.name, id: props.value.id}}/>
//     </div>
//   );
// };

// const HelloLicatTwo = (props) => {
//   return (
//     <div>
//       <h2>Two : {props.value.id}</h2>
//       <strong>Two : {props.value.name}</strong>
//     </div>
//   );
// };

// export default App;

const App = () => {
    return <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />;
};

// 구조분해할당 두번 했을 때
const HelloLicat = ({ value: { name, id } }) => {
    return (
        <div>
            <h2>{id}</h2>
            <strong>{name}</strong>
            <HelloLicatTwo value={{ name: name, id: id }} />
        </div>
    );
};

// 구조분해할당 한번 했을 때
const HelloLicatTwo = ({ value }) => {
    return (
        <div>
            <h2>Two : {value.id}</h2>
            <strong>Two : {value.name}</strong>
        </div>
    );
};

export default App;
