import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Product_Detail_Page from './Product_Detail_Page.js';
import SizeSelector from './Components/SubComponentLevel1/SizeSelector.js'
import SizeSelectorRender from './Components/SubComponentLevel1/SubComponentLevel2/SizeSelectorRender.js';
import DescriptionListRender from './Components/SubComponentLevel1/SubComponentLevel2/DescriptionListRender.js';
import QuantitySelectorRender from './Components/SubComponentLevel1/SubComponentLevel2/QuantitySelectorRender.js';

import { act } from 'react-dom/test-utils';
import { rest } from 'msw';
import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime';
import { setupServer } from 'msw/node';
import renderer from "react-test-renderer"
import { describe, expect, test } from '@jest/globals';
import { render, fireEvent, waitFor, waitForElementToBeRemoved, screen, cleanup } from '@testing-library/react';


const server = setupServer(
    rest.post('/products', (req, res, ctx) => {
      return res(ctx.json(response.data));
    })
  );


beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  const container = document.createElement('div');
  const root = createRoot(container);
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});

it ("Renders Product Detail Page without crashing", () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  act(() => {
    ReactDOM.createRoot(container).render(<Product_Detail_Page />);
  });
})

it ("Should Render each file without crashing", () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  act(() => {
    ReactDOM.createRoot(container).render(<SizeSelector />);
  });
})

it ("Should Render each file without crashing", () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  act(() => {
    ReactDOM.createRoot(container).render(<QuantitySelectorRender />);
  });
})

describe('Product Detail Page Widget', () => {

  test('Should render Product Detail Page widget without crashing', () => {
      render(<Product_Detail_Page />);

      const widget = screen.getByTestId('Product_Detail_Page');

      expect(widget).toBeInTheDocument();
  });

  test('Should render Question and Answers widget when no productId is passed', () => {
    render(<Product_Detail_Page />);

    const widget = screen.getByTestId('Product_Detail_Page');

    expect(widget).toHaveTextContent("$");
  });

  test('Should render Question and Answers widget when productId is passed', async () => {
    render(<Product_Detail_Page currentProductId={71967} />);

    await waitFor(() => screen.getByTestId('Product_Detail_Page'));

    const imageWheel = screen.getByTestId('ImageWheel');
    expect(imageWheel).toBeInTheDocument();
  });

  test('Should render Question and Answers widget when productId is passed', async () => {
    render(<Product_Detail_Page currentProductId={71967} />);

    await waitFor(() => screen.getByTestId('Product_Detail_Page'));

    const productInformation = screen.getByTestId('ProductInformation');
    expect(productInformation).toBeInTheDocument();

  });

  test('Should render Question and Answers widget when productId is passed', async () => {
    render(<Product_Detail_Page currentProductId={71967} />);

    await waitFor(() => screen.getByTestId('Product_Detail_Page'));

    const styleSelection = screen.getByTestId('StyleSelection');
    expect(styleSelection).toBeInTheDocument();
  });

  test('Should render Question and Answers widget when productId is passed', async () => {
    render(<Product_Detail_Page currentProductId={71967} />);

    await waitFor(() => screen.getByTestId('Product_Detail_Page'));

    const addToCart = screen.getByTestId('AddToCart');
    expect(addToCart).toBeInTheDocument();
  });


  test('Clicking the "More Answered Questions" button should load two more questions each time it is clicked', async () => {
  render(<Questions_Answers productId={71967} />);

  await waitFor(() => screen.getByTestId('questionList'));

  fireEvent.click(screen.getByText('MORE ANSWERED QUESTIONS'));

  let questions = screen.queryAllByTestId('question');

  expect(questions.length).toEqual(4);

  fireEvent.click(screen.getByText('MORE ANSWERED QUESTIONS'));

  questions = screen.queryAllByTestId('question');

  expect(questions.length).toEqual(6);
});

});



//   test('Answer modal should exist on "Add Answer" button click and should have an id of "answerModal"', async () => {
//     render(<Questions_Answers productId={64912} />);

//     await waitFor(() => screen.getByTestId('questionList'));

//     const addAnswerBtn = screen.queryAllByTestId('addAnswer')[0];

//     fireEvent.click(addAnswerBtn);

//     const modal = screen.getByTestId('modal');

//     expect(modal).toBeInTheDocument();
//     expect(modal.id).toBe("answerModal");
//     expect(modal).toHaveTextContent('Submit Your Answer');
//   });

//   test('Question modal inputs should change', async () => {
//     render(<Questions_Answers />);

//     const questionBtn = screen.getByTestId('questionBtn');

//     fireEvent.click(questionBtn);

//     const questionBody = screen.getByTestId('questionBody');
//     const nickname = screen.getByTestId('nickname');
//     const email = screen.getByTestId('email');
//     const submit = screen.getByTestId('submitQuestion');

//     fireEvent.change(questionBody, {
//       target: {
//         value: 'Testing question body'
//       }
//     });

//     fireEvent.change(nickname, {
//       target: {
//         value: 'testing123'
//       }
//     });

//     fireEvent.change(email, {
//       target: {
//         value: 'sample@email.com'
//       }
//     });

//     expect(questionBody).toHaveValue('Testing question body');
//     expect(nickname).toHaveValue('testing123');
//     expect(email).toHaveValue('sample@email.com');

//     fireEvent.click(submit);

//     // await waitFor(() => expect(screen.getByTestId('modal')).not.toBeInTheDocument());
//   });

//   test('Answer modal inputs should change', async () => {
//     render(<Questions_Answers productId={64912} />);

//     await waitFor(() => screen.getByTestId('questionList'));

//     const addAnswerBtn = screen.queryAllByTestId('addAnswer')[0];

//     fireEvent.click(addAnswerBtn);

//     const answerBody = screen.getByTestId('answerBody');
//     const nickname = screen.getByTestId('nickname');
//     const email = screen.getByTestId('email');
//     const submit = screen.getByTestId('submitAnswer');

//     fireEvent.change(answerBody, {
//       target: {
//         value: 'Testing answer body'
//       }
//     });

//     fireEvent.change(nickname, {
//       target: {
//         value: 'testing123'
//       }
//     });

//     fireEvent.change(email, {
//       target: {
//         value: 'sample@email.com'
//       }
//     });

//     expect(answerBody).toHaveValue('Testing answer body');
//     expect(nickname).toHaveValue('testing123');
//     expect(email).toHaveValue('sample@email.com');

//     fireEvent.click(submit);

//     // await waitFor(() => expect(screen.getByTestId('modal')).not.toBeInTheDocument());
//   });

//   test('Photo modal should appear when an image is clicked', async () => {
//     render(<Questions_Answers productId={64912} />);

//     await waitFor(() => screen.getByTestId('questionList'));

//     fireEvent.click(screen.queryAllByTestId('photo')[0]);

//     const modal = screen.getByTestId('modal');
//     const close = screen.getByTestId('close');

//     expect(modal).toBeInTheDocument();
//     expect(modal.id).toBe("photoModal");

//     fireEvent.click(close);

//     await waitFor(() => expect(modal).not.toBeInTheDocument());
//   });

//   test('Should render Question and Answers widget when productId is passed', async () => {
//     render(<Questions_Answers productId={64912} />);

//     await waitFor(() => screen.getByTestId('questionList'));

//     const questionList = screen.getByTestId('questionList');

//     expect(questionList).toBeInTheDocument();
//   });

//   test('There should be two questions on page load', async () => {
//     render(<Questions_Answers productId={64912} />);

//     await waitFor(() => screen.getByTestId('questionList'));

//     const questions = screen.queryAllByTestId('question');

//     expect(questions.length).toEqual(2);
//   });

//   test('Clicking the "More Answered Questions" button should load two more questions each time it is clicked', async () => {
//     render(<Questions_Answers productId={64912} />);

//     await waitFor(() => screen.getByTestId('questionList'));

//     fireEvent.click(screen.getByText('MORE ANSWERED QUESTIONS'));

//     let questions = screen.queryAllByTestId('question');

//     expect(questions.length).toEqual(4);

//     fireEvent.click(screen.getByText('MORE ANSWERED QUESTIONS'));

//     questions = screen.queryAllByTestId('question');

//     expect(questions.length).toEqual(6);
//   });

//   test('There should be two answers loaded on page load for each question', async () => {
//     render(<Questions_Answers productId={64912} />);

//     await waitFor(() => screen.getByTestId('questionList'));

//     const answers = screen.queryAllByTestId('answer');

//     expect(answers.length).toEqual(2);
//   });

//   test('All answers for a question should load on click of "Load More Answers"', async () => {
//     render(<Questions_Answers productId={64912} />);

//     await waitFor(() => screen.getByTestId('questionList'));

//     fireEvent.click(screen.queryAllByText('LOAD MORE ANSWERS')[0]);

//     const answers = screen.queryAllByTestId('answer');

//     expect(answers.length).toEqual(9);
//   });

//   test('There should be two answers after expanding and retracting answer list for a question', async () => {
//     render(<Questions_Answers productId={64912} />);

//     await waitFor(() => screen.getByTestId('questionList'));

//     fireEvent.click(screen.queryAllByText('LOAD MORE ANSWERS')[0]);

//     fireEvent.click(screen.queryByText('COLLAPSE ANSWERS'));

//     const answers = screen.queryAllByTestId('answer');

//     expect(answers.length).toEqual(2);
//   });

//   });