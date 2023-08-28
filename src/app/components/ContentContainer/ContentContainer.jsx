import { SearchBar } from "../SearchBar/SearchBar.jsx";
import "./ContentContainer.scss";

export const ContentContainer = ({children}) => {
  return (
    <>
      <div className="content__container">
        <SearchBar />
        {children}
      </div>
    </>
  );
};
