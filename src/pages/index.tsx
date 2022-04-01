import type { NextPage } from 'next'

import { useState } from 'react'

import Head from 'next/head'

import Image from 'next/image'

import banner from '@Images/banner.jpg'

import logo from '@Images/logo.svg'

import checkboxOff from '@Images/checkbox-off.svg'

import trash from '@Images/trash.svg'

import tile1 from '@Images/tile-1.jpg'

import styled from 'styled-components'

import { Main, TopBanner, NavBar, PageButton, BottomBanner, Title, Input, Button, Paragraph } from '@Components'

const LogoPosition = styled.div`
  width: 100%;
  padding-left: 18px;

  display: flex;
  justify-content: start;


  /* Smartphone - landscape */ 
  @media screen and (max-width: 480px) {
    padding-left: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    
    background-color: black;
    justify-content: center;
  }

  /* Tablet - portrait */ 
  @media screen and (min-width: 480px) and (max-width: 768px) {
    width: 50%;
  }

  /* Tablet - landscape */ 
  @media screen and (min-width: 768px) and (max-width: 960px) {
    width: 50%;
  }

`

const PageButtonPosition = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
  }
`

const ImageTopPosition = styled.div`
  position: absolute;
  width: 100vw;
  height: 90vh;
  overflow: hidden;
  z-index: -1;

`

const ImageBottomPosition = styled.div`
  padding-right: 20px;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 35px 20px 0px 20px;
  }
`

const TasksPosition = styled.div`
  width: 50%; 
  height: 68%;
  padding-left: 20px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0px;
  }

`

const TitleTaskStyled = styled.h1`
  color: black;
  font-family: roboto;
  font-weight: 400;
  font-size: 36px;

  @media screen and (max-width: 480px){
    margin-left: 20px;
  }
`

const TaskItem = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 480px) {
    width: 90%;
    margin-left: 20px;
  }
`
const BannerTopItems = styled.div`

  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 55px;
  
  @media screen and (max-width: 480px) {
    width: 90%;
    align-items: start;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`

const BannerTopPosition = styled.div`
    display: flex;
    flex-direction: column;
    
    @media screen and (min-width: 768px) {
      width: 33%;
      margin-top: 100px;
      align-items: center;
    }

    @media screen and (min-width: 768px) and (max-width: 960px) {
      width: 50%;
      margin-top: 100px;
      align-items: center;
    }
`

const TaskName = styled(Paragraph)`
  font-weight: 400;
  font-size: 20px;
  width: 38%;
  padding-left: 15px;
  color: black;

  display: flex;
  align-items: start;
  
  @media screen and (max-width: 480px) {
    margin-left: 10px;
    width: 70%;
  }
`

const InputPosition = styled.div`
  background-color: #ededed;
  width: 70%;
  border-radius: 4px;
  border: none;
  padding: 19px 16px 19px 16px;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 81%;
    margin-left: 20px;
  }

`

const ButtonTaskStyled = styled(Button)`
  padding: 9px 20px;
  background-color: #48a8c0;
  border-radius: 4px;
  font-family: roboto;
  font-weight: 400;
  font-size: 21px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`

const ButtonRemoveStyled = styled(Button)`
  
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const Checkbox = styled(Input)`
  
`

const ButtonLabel = styled(Button)`
  
  background: rgb(26 0 0 / 28%);
  padding: 9px 28px 9px 28px;
  border-radius: 30px;
  white-space: nowrap;
  
  font-family: roboto;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  
  color: #ffffff;
  border: solid 3px #ffffff;
  cursor: pointer;
`

const TextBottomLeft = styled.div`
  position: absolute;
  bottom: 8px;
  left: 16px;
  margin-left: 10px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    margin-left: 25px;
  }
`

const ButtonTopRight = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  margin-right: 15px;
  margin-top: 5px;
`

const ButtonCategory = styled(Button)`
  background: rgb(27 0 0 / 28%);
  padding: 9px 28px 9px 28px;
  border-radius: 30px;
  white-space: nowrap;
  
  font-family: roboto;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  
  color: #ffffff;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin-top: 35px;
  }
`

const Home: NextPage = () => {
  const [tasks, setTask] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleOnChange = (e: any) => setInputValue(e.target.value);
  const addTask = () => {
    setTask([...tasks, inputValue]);
    setInputValue('');

  }

  const removeTask = (e: any) => {
    const newTasks = tasks.filter(x => x !== e.target.getAttribute('data-task'))
    console.log(newTasks)
    setTask(newTasks)
  };


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <TopBanner>
          <ImageTopPosition>
            <Image src={banner} layout="fill" objectFit="cover" quality={100} alt="Banner" />
          </ImageTopPosition>
          <NavBar>
            <LogoPosition>
              <Image src={logo} quality={100} alt="Logo" />
            </LogoPosition>
            <PageButtonPosition>
              <PageButton href="https://google.com">PAGE ONE</PageButton>
              <PageButton href="https://google.com">PAGE TWO</PageButton>
              <PageButton href="https://google.com">PAGE THREE</PageButton>
            </PageButtonPosition>
          </NavBar>
          <BannerTopItems>
            <BannerTopPosition>
            <Title>Fog Test</Title>
            <Paragraph>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Paragraph>
            <div>
              <ButtonLabel>BUTTON LABEL</ButtonLabel>
            </div>
            </BannerTopPosition>
          </BannerTopItems>
         
        </TopBanner>

        <BottomBanner>
          <ImageBottomPosition>
            <Image src={tile1} quality={100} alt="Category" />
            <ButtonTopRight>
              <ButtonCategory>Category</ButtonCategory>
            </ButtonTopRight>
            <TextBottomLeft>
              <Title style={{fontSize: '24px', marginBottom: '0px'}}>Fog Test</Title>
              <Paragraph style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Incididunt ut labore et dolore magna</Paragraph>
            </TextBottomLeft>
          </ImageBottomPosition>

          <TasksPosition>
            <TitleTaskStyled>My Tasks</TitleTaskStyled>
            <TaskItem>
                {tasks.map((task, i) => ( 
                  <div key={task + i} style={{ display: 'flex'}}>
                    <Image src={checkboxOff} quality={100} alt="check"/>
                    <TaskName>{ task }</TaskName>
                    <ButtonRemoveStyled type="button" data-task={task} onClick={removeTask}>
                      <Image src={trash} quality={100} alt="trash"/>
                    </ButtonRemoveStyled>
                  </div>
                  )
                )}
              </TaskItem>
            <InputPosition>
              <Input placeholder="Add a task" value={inputValue} onChange={handleOnChange}></Input>
              <ButtonTaskStyled name="addButton" type="button" onClick={addTask}>Add</ButtonTaskStyled>
            </InputPosition>
          </TasksPosition>
        
        </BottomBanner>
      </Main>
    </>
  )
}

export default Home
