import { ChangeEvent, useState, useMemo, useEffect } from 'react';

type Validation<T> = {
  [K in keyof T]: [(value: T[K]) => boolean, string];
};

export const useForm = <T extends object>( 
  initialForm: T, 
  formValidations?: Validation<T> 
) => {
  
  const [ formState, setFormState ] = useState( initialForm );

  useEffect(() => {
    setFormState( initialForm );
  }, [ initialForm ])
  

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value
    });
  }

  const onResetForm = () => {
    setFormState( initialForm );
  }

  const formValidation = useMemo(() => {

    const formCheckedValues: Record<string, string | null> = {};
    for ( const formField in formValidations) {
      const [ fn, errorMessage ] = formValidations[ formField ];

      formCheckedValues[`${ formField }Valid`] = fn( formState[formField])
        ? null
        : errorMessage;
    }

    return formCheckedValues;
  }, [ formState ]);

  const isFormValid = useMemo(() => {
    for ( const formValue in formValidation ) {
      if ( formValidation[ formValue ] !== null ) return false;
    }

    return true;
  }, [ formValidation ]);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    formValidation,
    isFormValid,
  }
}