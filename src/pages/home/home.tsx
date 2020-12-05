import React, { useCallback, useRef, useState } from 'react';
import {Container, Buttom, TextArea, Table} from './styles';
import countWords from '../../services/countWords';


const Home:React.FC = () => {

    const [isFocus, setIsfocus] = useState(false);
    const [errorMessage, setError] = useState<string>('');
    const [result, setResult] = useState<object>({});
    const [textAraContent,setTextAreaContent] = useState<string | undefined>('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

   const sortedWords = Object.entries(result)
   .sort((a:any,b:any) => (a[1] < b[1])? 1 : -1);

    const handleGetResult = useCallback(() => {
        if(!textAraContent?.length){
            setError('The Text input box is empty.');
            return;
        }
        setError('');
        setResult(countWords(textAraContent))
    },[textAraContent]);


    return (<Container>

                <h1>Word Frequency Counter</h1>
                <TextArea 
                    maxLength={2400}
                    ref={textAreaRef}
                    onFocus={() => setIsfocus(true)}
                    onBlur={() => setIsfocus(false)}
                    onChange={() => setTextAreaContent(textAreaRef.current?.value)}
                    value={textAraContent}
                    isFocus={isFocus}
                />
                <Buttom onClick={ () => handleGetResult()}> 
                    Count the Words!
                </Buttom>

                {errorMessage.length === 0 && errorMessage }
                <p> {!!errorMessage.length && errorMessage} </p>
                <h3>  
                    {!!sortedWords.length 
                    && `Total Words: ${sortedWords.length}`}
                </h3>

                <Table>
                    <thead>
                        <tr>
                            <th>
                                WORD
                            </th>
                            <th>
                                FREQUENCY
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!sortedWords && 
                        sortedWords.map((itemList) => 
                        <tr key={itemList[0]}> 
                            <td>{`${itemList[0]}`}</td>
                            <td>{`${itemList[1]}`}</td>
                        </tr>)}
                    </tbody>
                </Table>
        
           
            </Container>

        
            )

};


export default Home;
