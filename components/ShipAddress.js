import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import { useUser } from './User';

import Form from './styles/Form';

const UPDATE_USER_ADDRESS = gql`
  mutation UPDATE_USER_ADDRESS($id: ID!, $data: UserUpdateInput!) {
    updateUser(id: $id, data: $data) {
      id
      street
      city
      state
      zip
    }
  }
`;

export default function ShipAddress() {
  const me = useUser();
  const { inputs, handleChange, resetForm } = useForm({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const [
    updateAddress,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_USER_ADDRESS);

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateAddress({
          variables: {
            id: me.id,
            data: {
              street: inputs.street,
              city: inputs.city,
              state: inputs.state,
              zip: inputs.zip,
            },
          },
        });
        console.log(res);
        /* clearForm();
        Router.push({
          pathname: `/products/${res.data.createProduct.id}`,
        }); */
      }}
    >
      <h2>Shipping Details</h2>

      <fieldset /* disabled={loading} aria-busy={loading} */>
        <label htmlFor="street">
          Street
          <input
            type="text"
            name="street"
            placeholder=""
            autoComplete="street-address"
            value={inputs.street}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="city">
          City
          <input
            type="text"
            name="city"
            placeholder=""
            autoComplete="address-level2"
            value={inputs.city}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="city">
          State
          <input
            type="text"
            name="state"
            placeholder=""
            autoComplete="address-level1"
            value={inputs.state}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="zip">
          Zip
          <input
            type="text"
            name="zip"
            placeholder=""
            autoComplete="postal-code"
            value={inputs.zip}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Save</button>
      </fieldset>
    </Form>
  );
}
