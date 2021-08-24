import styled from "styled-components";

const Styles = styled.div`
  padding: 1rem;
  .pagination {
    margin: 0 auto;
    text-align: center;
    padding: 30px 0px;
  }
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      input {
        background-color: bisque;
        border: none;
        height: 30px;
        width: 100%;
      }
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

export default Styles;
