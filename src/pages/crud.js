// import React from 'react';
// import ReactPlayer from 'react-player'
// import './App.css'


// export default class App extends ReactComponent{

//     constructor(props){
//     super(props);
//         this.state={

//             aulas:[

//                 {
//                     nome: "kodular",
//                     imagemUrl: "https://static-cse.canva.com/blob/183499/IMAGE-1.jpg",
//                 },
//                 {
//                     nome: "kodular",
//                     imagemUrl: "",
//                 },
//                 {
//                     nome: "kodular",
//                     imagemUrl: "",
//                 },
//                 {
//                     nome: "kodular",
//                     imagemUrl: "",
//                 },
//                 {
//                     nome: "kodular",
//                     imagemUrl: "",
//                 },
//                 {
//                     nome: "kodular",
//                     imagemUrl: "",
//                 },
//                 {
//                     nome: "kodular",
//                     imagemUrl: "",
//                 },



//             ],
//             nomeAulas: "",
//             imagermUrlAulas: "",
//             editando: false,
//             indexEditando: null,


//         };

//     }

//     onSubimit = (a) =>{

//         a.preventDefault();
//         const{aulas,editando, indexEditando, nomeAulas,imagemUrlAulas} = this.state

//         if (editando){
//             const aulasAtualizadas = aulas.map((a,index)=>{
//                 if (indexEditando === index) {
//                     a.nome = nomeAulas;
//                     a.imagemUrl = imagemUrlAulas;
//                   }
          
//                   return a;


//             });

//             this.setState({
//                 aulas: aulasAtualizadas,
//                 indexEditando: null,
//                 editando: false,
//               });
//             } else {
//             this.setState({
//                 aulas: [
//                     ...aulas,
                
//                     {
//                         nome: nomeAulas,
//                         imagemUrl: imagemUrlAulas,
//                     },
//                 ]  
//             });
//         }
//         this.setState({
//             nomeAulas: "",
//             imagemUrlAulas: "",
//           });
//             };
    
//         deletar = (index) =>{

//             const {aulas}= this.state;
//             this.setState({

//                 aulas: aulas.filter((a,i) => i!==index),
//             });
//         };
// }   

//      render(){

//         const {aulas}=this.state;
        
//         return(

//             <div className="container">
//                 <main className="main">

//                     <h1>Aulas</h1>
//                     <ul>

//                         {aulas.map((aulas)=>{

//                             <li>

//                                 <h3>{aulas.nome}</h3>
//                                 <img src={aulas.imagemUrl} alt={aulas.nome}/>
//                             </li>
//                         })};
                    
//                     </ul>
//                 </main>
//             </div>
//         );
//     }

// };    


// render(){
//     const { aulas, nomeAulas, imagemUrlAulas, editando, indexEditando } =
//       this.state;

    
//       return (
//       <div className="container">
//         <main className="main">
//           <h1>Aulas</h1>
//           <hr />
//           <h2>
//             {editando
//               ? `Editando: ${aula[indexEditando]?.nome}`
//               : "Cadastre uma nova Aula"}
//           </h2>
//           <form onSubmit={this.onSubmit}>
//             <input
//               placeholder="Nome"
//               value={nomeAula}
//               onChange={(e) => {
//                 this.setState({
//                   nomeAula: e.target.value,
//                 });
//               }}
//             />
//             <br />
//             <input
//               placeholder="Url da Imagem"
//               value={imagemUrlAula}
//               onChange={(e) => {
//                 this.setState({
//                   imagemUrlAulas: e.target.value,
//                 });
//               }}
//             />
//             <br />
//             <button type="submit">Salvar</button>
//           </form>
//           <hr />
//           <h2>Aulas</h2>
//           <ul>
//             {aulas.map((a, index) => (
//               <li key={index}>
//                 <h3>{a.nome}</h3>
//                 <img src={a.imagemUrl} alt={a.nome} />
//                 <br />
//                 <button onClick={() => this.deletar(index)}>Deletar</button>
//                 <br />
//                 <button
//                   onClick={() => {
//                     this.setState({
//                       editando: true,
//                       indexEditando: index,
//                       nomeAulas: a.nome,
//                       imagemUrlAulas: a.imagemUrl,
//                     });
//                   }}
//                 >
//                   Editar
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </main>
//       </div>
//     );

//   }

