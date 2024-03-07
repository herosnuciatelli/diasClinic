import ComponentStyle from "./Style";
import { Whatsapp } from "../../content/json/components-mock.json";
import styled from "styled-components";

const TableStyled = styled.div`
  border: 1px solid rgba(0,0,0, 0.1);
  border-radius: 4px;
`

export default function ServiceCard(props) {

  return (
    <ComponentStyle.ServiceContainerCard>
      <ComponentStyle.CardImg $background={props.background} />
      <ComponentStyle.TimeContainer>
        <ComponentStyle.Time>{props.time}</ComponentStyle.Time>
      </ComponentStyle.TimeContainer>
      <ComponentStyle.InfoContainer>
        <ComponentStyle.CardTitle>{props.cardTitle}</ComponentStyle.CardTitle>
        <ComponentStyle.CardContent>
          <ComponentStyle.Description>
            {props.description}
          </ComponentStyle.Description>

          { props.list != undefined && (
            <TableStyled>
              { props.list.map((item) => {
                return (
                  <div key={item} style={{padding: '5px 0', fontSize: '14px', border: '1px solid rgba(0,0,0, 0.1)'}}>
                    <span style={{color:' rgba(0,0,0, 0.5)'}}>{item}</span>
                  </div>
                )
              })}
              
            </TableStyled>
          )}

          <ComponentStyle.Benefits>
            <ComponentStyle.ContentTitle>Benefits</ComponentStyle.ContentTitle>
            {props.benefits.map((benefitArray) => (
              <ComponentStyle.Benefit key={benefitArray.benefit}>
                <ComponentStyle.ArrowIcon
                  src={ComponentStyle.Arrow}
                  alt="icon"
                />
                {benefitArray.benefit}
              </ComponentStyle.Benefit>
            ))}
          </ComponentStyle.Benefits>
          
        </ComponentStyle.CardContent>
      </ComponentStyle.InfoContainer>

      <ComponentStyle.CardButton href={Whatsapp.link}  target="_blanket">Book Now</ComponentStyle.CardButton>

    </ComponentStyle.ServiceContainerCard>
  );
}
