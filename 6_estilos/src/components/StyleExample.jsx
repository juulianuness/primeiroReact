import React from 'react'
import "./StyleExample.css";
import styles from "./styleExample.module.css";


const StyleExample = () => {
    // inline
    const inlineStyle = {
        color: "blue",
        fontSize: "20px",
    };

  return (
    <div>
      <h2 style={inlineStyle}>Estilos Inline</h2>

      {/*arquivo de estilos  */}
      <p className='text'>Meu Css</p>

      {/*CSS module */}
      <p className={styles.textPurple}>Meu Css module</p>
      
    </div>
  );
};

export default StyleExample
