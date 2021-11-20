import styled, {keyframes} from 'styled-components';


const apears = keyframes`
  from {
    transform:scale(0);
  }

  to {
    transform:scale(5rem);
  }
`;

export const Form = styled.div`
    display:${props => props.className ? `flex`:`none`};
    color:var(--lightTextColor);
    align-items: center;
    justify-content: center;

    z-index: 1;

    width: 100%;
    height:100vh;

    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter:blur(1px);


    div{
      animation:${apears} 0.3s linear ;

      position: relative;
      border-radius:5px;
      background-color:var(--NavbarColor);

      width: clamp(20rem,50vw,35rem);
      height: clamp(15rem,48vw,30rem);
      
    }

    button {
      position:absolute;
      top:0;
      right:0;
      margin:1rem;
      height:2rem;
      width:2rem;

      filter:var(--filterLight);

      background: none;
	    color: inherit;
	    border: none;
	    padding: 0;
    	font: inherit;
    	cursor: pointer;
    	outline: inherit;
    }

    
`;



export const SearchBar = styled.div`
    display:${props => props.className ? `flex`:`none`};
    animation:${apears} 0.3s linear ;
    background-color:white;
    border:none;

    z-index:3;
`;

