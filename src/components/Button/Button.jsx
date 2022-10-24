import {Btn} from "components/Button/Button.styled"
export const Button = ({ loadMore }) => {
  
  return (
    <Btn type="button" onClick= {loadMore} >
      Load more
    </Btn>
  );
};