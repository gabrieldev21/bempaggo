import ButtonNew from '.';

export default {
  title: 'ButtonNew',
  component: ButtonNew,
};

export const Button = () => (
  <div
    style={{
      width: 300,
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 100,
    }}
  >
    <ButtonNew>ENVIAR</ButtonNew>
    <br />
    <ButtonNew style={{padding: '4px 10px', fontSize: '22px'}}>+</ButtonNew>
    <br />
    <ButtonNew style={{padding: '4px 12px', fontSize: '22px'}}>-</ButtonNew>
  </div>
);

