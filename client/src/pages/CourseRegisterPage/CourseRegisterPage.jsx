import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Trash } from 'phosphor-react'
import * as yup from 'yup'
import styled from 'styled-components'

import Card from '../../components/Card'
import InputGroup from '../../components/InputGroup'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import useCourseRegister from '../../hooks/useCourseRegister'

const RegisterPageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const RegisterPageSection = styled.section`
  width: 828px;
  max-width: 100%;
`

const RegisterPageSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--spacing-5);
`

const RegisterPageSectionTitle = styled.h1`
  color: var(--primary);
  font-size: 20px;
  text-align: center;
  width: 100%;
`

const RegisterPageSectionForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--spacing-5);
`

const RegisterPageSectionFormRow = styled.div`
  display: flex;
  gap: var(--spacing-4);
`

const RegisterPageSectionFormColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--spacing-5);
`

const RegisterPageSectionFormGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  gap: var(--spacing-5);
`

const RegisterPageSectionFormFooter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-5);
`

const RegisterPageSectionFormGroupContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`

const RegisterPageSectionFormGroupContentItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-gray);
  border-radius: var(--border-radius-1);
  padding: var(--spacing-4);
  font-size: 12px;
  line-height: 15px;
  font-weight: var(--font-bold);
  color: var(--secondary);
`

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  imageUrl: yup.string().url('Deve ser uma url').required('Campo obrigatório'),
  category: yup.string().required('Campo obrigatório'),
  description: yup.string().required('Campo obrigatório'),
  duration: yup.number('Deve ser um número').required('Campo obrigatório'),
  targetMarket: yup.string().required('Campo obrigatório')
})

function CourseRegisterPage() {
  const [content, setContent] = useState({ value: '', error: '' })
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    defaultValues: {
      name: '',
      imageUrl: '',
      category: '',
      description: '',
      duration: '',
      targetMarket: ''
    },
    resolver: yupResolver(schema)
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contents'
  })

  const { isSubmitting, registerCourse } = useCourseRegister()

  const onSubmit = (data) => {
    registerCourse(data)
  }

  const handleAddContent = () => {
    if (content.value) {
      append({ id: new Date().getTime(), text: content.value })
      setContent({ value: '', error: '' })
      return
    }

    setContent((prev) => ({ ...prev, error: 'Campo obrigatório' }))
  }

  const handleChangeContent = (event) => {
    setContent({
      value: event.target.value,
      error: event.target.value ? '' : 'Campo obrigatório'
    })
  }

  const handleDeleteContent = (index) => {
    remove(index)
  }

  return (
    <RegisterPageContainer>
      <RegisterPageSection>
        <Card>
          <RegisterPageSectionCard>
            <RegisterPageSectionTitle>Cadastrar Curso</RegisterPageSectionTitle>
            <RegisterPageSectionForm onSubmit={handleSubmit(onSubmit)}>
              <RegisterPageSectionFormRow>
                <RegisterPageSectionFormColumn>
                  <InputGroup
                    labelText="Nome"
                    placeholder="Nome do curso"
                    helperText={errors?.name?.message}
                    {...register('name')}
                  />
                  <InputGroup
                    labelText="Duração"
                    placeholder="Duração do curso"
                    helperText={errors?.duration?.message}
                    {...register('duration')}
                  />
                  <InputGroup
                    labelText="Descrição"
                    placeholder="Descrição do curso"
                    helperText={errors?.description?.message}
                    {...register('description')}
                  />
                </RegisterPageSectionFormColumn>

                <RegisterPageSectionFormColumn>
                  <InputGroup
                    labelText="Url ícone"
                    placeholder="Url contendo ícone"
                    helperText={errors?.imageUrl?.message}
                    {...register('imageUrl')}
                  />
                  <InputGroup
                    labelText="Categoria"
                    placeholder="Categoria do curso"
                    helperText={errors?.category?.message}
                    {...register('category')}
                  />
                  <InputGroup
                    labelText="Público alvo"
                    placeholder="Público alvo do curso"
                    helperText={errors?.targetMarket?.message}
                    {...register('targetMarket')}
                  />
                </RegisterPageSectionFormColumn>
              </RegisterPageSectionFormRow>

              <RegisterPageSectionFormGroup>
                <InputGroup
                  labelText="Conteúdo"
                  placeholder="Conteúdo do curso"
                  value={content.value}
                  helperText={content.error}
                  onChange={handleChangeContent}
                />

                <div>
                  <Button
                    type="button"
                    variant={BUTTON_VARIANT.SECONDARY_OUTLINED}
                    onClick={handleAddContent}
                  >
                    Adicionar
                  </Button>
                </div>
              </RegisterPageSectionFormGroup>

              <RegisterPageSectionFormGroupContent>
                {fields.map((field, index) => (
                  <RegisterPageSectionFormGroupContentItem key={field.id}>
                    <p>{field.text}</p>

                    <Button
                      isIconButton
                      type="button"
                      variant={BUTTON_VARIANT.SECONDARY_OUTLINED}
                      onClick={() => handleDeleteContent(index)}
                    >
                      <Trash size={16} />
                    </Button>
                  </RegisterPageSectionFormGroupContentItem>
                ))}
              </RegisterPageSectionFormGroupContent>

              <RegisterPageSectionFormFooter>
                <div>
                  <Button type="submit" disabled={isSubmitting}>
                    Cadastrar
                  </Button>
                </div>
                <div>
                  <Button
                    type="button"
                    variant={BUTTON_VARIANT.PRIMARY_LINK}
                    onClick={() => navigate('/')}
                  >
                    Cancelar
                  </Button>
                </div>
              </RegisterPageSectionFormFooter>
            </RegisterPageSectionForm>
          </RegisterPageSectionCard>
        </Card>
      </RegisterPageSection>
    </RegisterPageContainer>
  )
}

export default CourseRegisterPage
