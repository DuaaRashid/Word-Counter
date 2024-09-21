# Word Counter CLI App

This project is a **Word Counter** command-line interface (CLI) application built using **TypeScript**. The app allows users to input a paragraph and calculates the total number of words in the input.

## Features
- **Interactive Input**: Continuously prompts users to input paragraphs until the program is manually terminated.
- **Word Counting**: Accurately counts the number of words in a given paragraph, accounting for extra spaces.
- **Real-time Display**: Outputs the total number of words immediately after the paragraph is entered.

## How It Works
1. The user is prompted to enter a paragraph.
2. The app removes any leading or trailing spaces and splits the paragraph into words.
3. The total word count is displayed.
4. The process repeats until the user manually exits the program.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/word-counter-cli.git
    cd word-counter-cli
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the app:
    ```bash
    npx ts-node index.ts
    ```

## Usage

Once the app is running, it will continuously prompt you to enter a paragraph and return the word count. 

Example input and output:
```
Enter your paragraph: This is a simple word counter application.
Total words in your paragraph are: 6
```

## Example

```
Enter your paragraph:  The quick brown fox jumps over the lazy dog.
Total words in your paragraph are: 9
```

## Dependencies

- [prompt-sync](https://www.npmjs.com/package/prompt-sync): For synchronous input collection.

## License

This project is licensed under the MIT License.
