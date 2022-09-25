import React from 'react';
import Typo from "../../components/Typo";
import Form from "../../components/form/Form";
import FormControl from "../../components/form/FormControl";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import {Extendable} from "../../types";
import {UseFormReturn} from "react-hook-form/dist/types";

export type InputFormProps = Extendable & {
  loading?: boolean;
  onSubmit: (data: { address: string }) => void;
  form: UseFormReturn<any>;
}

const InputForm = (props: InputFormProps) => {
  const {form, loading = false} = props;
  return (
    <div className={props.className}>
      <Typo.Title className={
        '!text-4xl'
      }>
        Search Address
      </Typo.Title>
      <Typo.Normal className={'mt-1'}>
        Type-in the address of smart contract to check its security
      </Typo.Normal>

      <div className={'mt-8'}>
        <Form
          form={form}
          onSubmit={(data) => {
            props.onSubmit(data)
          }}>
          <div className={'flex items-center'}>
            <FormControl name={'address'} className={'flex-1'}>
              <Textarea
                placeholder={'address of smart contract, e.g. 0x0000000000000'}
              />
            </FormControl>

            <Button
              type={'submit'}
              state={'primary'}
              className={'!w-[120px] ml-4'}
              loading={loading}
            >
              Search
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default InputForm;