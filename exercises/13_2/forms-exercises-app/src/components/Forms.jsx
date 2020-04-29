import React from 'react';

const states = [
  'AC|Acre',
  'AL|Alagoas',
  'AP|Amapá',
  'AM|Amazonas',
  'BA|Bahia',
  'CE|Ceará',
  'DF|Distrito Federal',
  'ES|Espírito Santo',
  'GO|Goiás',
  'MA|Maranhão',
  'MT|Mato Grosso',
  'MS|Mato Grosso do Sul',
  'MG|Minas Gerais',
  'PA|Pará',
  'PB|Paraíba',
  'PR|Paraná',
  'PE|Pernambuco',
  'PI|Piauí',
  'RJ|Rio de Janeiro',
  'RN|Rio Grande do Norte',
  'RS|Rio Grande do Sul',
  'RO|Rondônia',
  'RR|Roraima',
  'SC|Santa Catarina',
  'SP|São Paulo',
  'SE|Sergipe',
  'TO|Tocantins',
];

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <fieldset className="personal-information-conteiner">
          <div className="name input-conteiner">
            <span className="field-name">Nome:</span>
            <input type="text" name="name" maxLength="40" size="40" required />
          </div>
          <div className="email input-conteiner">
            <span className="field-name">Email:</span>
            <input
              type="email"
              name="email"
              maxLength="50"
              size="50"
              required
            />
          </div>
          <div className="cpf input-conteiner">
            <span className="field-name">CPF:</span>
            <input type="text" name="cpf" maxLength="11" size="11" required />
          </div>
          <div className="adress input-conteiner">
            <span className="field-name">Endereço:</span>
            <input
              type="text"
              name="adress"
              maxLength="200"
              size="200"
              required
            />
          </div>
          <div className="city input-conteiner">
            <span className="field-name">Cidade:</span>
            <input type="text" name="city" maxLength="28" size="28" required />
          </div>
          <div className="state input-conteiner">
            <span className="field-name">Estado</span>
            <select value={this.state} onChange={this}>
              {states.map((state, key) => (
                <option key={key}>{state}</option>
              ))}
            </select>
          </div>
          <div className="residence-type-field">
            <label htmlFor="house">
              <input type="radio" name="home-type" id="house" value="casa" />
              Casa
            </label>
            <label htmlFor="apartament">
              Apartamento
              <input
                type="radio"
                name="home-type"
                id="apartament"
                value="apartamento"
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="resume-conteiner">
            <textarea name="resume" maxLength="1000" required />
          </div>
          <div className="last-job-conteiner">
            <span>Cargo:</span>
            <input type="text" name="lastjob" maxLength="40" required />
          </div>
          <div className="last-job-description-conteiner">
            <span>Descrição do cargo:</span>
            <textarea name="job-description" maxLength="500" />
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Forms;
