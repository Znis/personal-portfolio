import styled from "styled-components";





const P = styled.p`
font-size: 1.2rem;
font-weight: 500;
font-family: 'Lato', sans-serif;
color: #553c9a;

`

const StyledDiv = styled.div`
    margin: 0 auto;
    width: fit-content;
  
`







function FooterSection() {
   
  return (
    <section className="py-8 flex justify-center items-center bg-center bg-fixed bg-gradient-to-br from-slate-300  to-slate-400 ">

<div className="w-4/5">
<StyledDiv >
<P>Copyright © 2023. All rights are reserved</P>
  
</StyledDiv>
</div>



    </section>
  );
}
export default FooterSection;
