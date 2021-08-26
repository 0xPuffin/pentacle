## quick setup

```
$ git checkout development

$ git pull --rebase

$ yarn install

$ yarn start
```

## when things go wrong
```
$ rm -r yarn.lock

$ rm -rf node_modules

$ yarn cache clean

$ yarn install

$ yarn start
```



## Unit testing

### Jest and React Testing Library

- https://jestjs.io/docs/expect 
- https://github.com/jest-community/jest-extended

```
test('renders a message', () => {
    const {container, getByText} = render(<About />)
    expect(container.firstChild).toHaveClass(`p-about`)
})

test('renders a message', () => {
    const {container, getByText} = render(<About />)
    expect(container.firstChild).toMatchSnapshot(`
    <h1 className={"p-about"}>hello</h1> 
  `)
})
```

## Clear snapshots
$ yarn test -u



## All commits need to be signed

https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification

--------------------------------


## Image Download

It is possible to run a script which downloads all Icons from the json data.
In order to do that run:

`$ npm run download-images:eth`
`$ npm run download-images:sol`

And images will be downloaded into the assets folder

### NOTICE

Will break if the url does not end with a file extension


--------------------------------

## Image Resize
 
You can resize all png images from a directory by calling 

$ `node bin/resize-images.js path/to/images 32`

This will resize all images to 32px height. A third parameter can be supplied to add a fixed height
