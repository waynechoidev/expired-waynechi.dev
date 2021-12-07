import marked from "marked";

import Post from "../../../interface/post";

export default class Command {
  RootFileList: string[];
  commandList: { cmd: string; desc: string; usage: string }[];
  about: string;
  renderList: (contentsContainer: HTMLDivElement, fileList: string[]) => void;
  renderMarkdown: (contentsContainer: HTMLDivElement, contents: string) => void;
  pathError: (
    contentsContainer: HTMLDivElement,
    command: string,
    keyword: string
  ) => void;

  constructor() {
    this.RootFileList = ["blog", "about.txt"];
    this.commandList = [
      {
        cmd: "help",
        desc: "get help for commands",
        usage: "$ help",
      },
      {
        cmd: "ls",
        desc: "print a list of files and subdirectories",
        usage: "$ ls",
      },
      {
        cmd: "cd",
        desc: "change directory",
        usage: `$ cd blog
        $ cd ..`,
      },
      {
        cmd: "cat",
        desc: "display contents of file",
        usage: "$ cat about(.txt)",
      },
      {
        cmd: "clear",
        desc: "clear the terminal screen",
        usage: "$ clear",
      },
      {
        cmd: "shutdown",
        desc: "shutdown cli mode",
        usage: "$ shutdown",
      },
    ];
    this.about =
      "Hi I am Wayne.\n\nI prefer readable code, and maintainable system. I value background more than tools. Love JavaScript. Like TypeScript.\n\nI make web services in the morning and at night, and build boats as a full-time boat builder. Born and raised in South Korea. Living in New Zealand.";
    this.renderList = (
      contentsContainer: HTMLDivElement,
      fileList: string[]
    ) => {
      fileList.forEach((file) => {
        const newLine = document.createElement("span");
        newLine.innerText = file;
        contentsContainer.appendChild(newLine);
      });
    };
    this.renderMarkdown = (
      contentsContainer: HTMLDivElement,
      contents: string
    ) => {
      const newContents = document.createElement("div");
      newContents.innerHTML = marked(contents);
      contentsContainer.appendChild(newContents);
    };
    this.pathError = (
      contentsContainer: HTMLDivElement,
      command: string,
      keyword: string
    ) => {
      this.render(
        contentsContainer,
        `$ ${keyword}: Cannot find path '${command
          .split(keyword)[1]
          .replaceAll(" ", "")}' because it does not exist.`
      );
    };
  }

  clear(contentsContainer: HTMLDivElement) {
    while (contentsContainer.firstChild) {
      contentsContainer.firstChild.remove();
    }
  }

  help(contentsContainer: HTMLDivElement) {
    this.render(contentsContainer, "These are commands used in WayneChoi.dev:");

    const newTable = document.createElement("table");
    const newHeader = newTable.createTHead();
    const headerRow = newHeader.insertRow(0);
    const headerCell0 = headerRow.insertCell(0);
    headerCell0.innerText = "command";
    const headerCell1 = headerRow.insertCell(1);
    headerCell1.innerText = "description";
    const headerCell2 = headerRow.insertCell(2);
    headerCell2.innerText = "usage";

    this.commandList.forEach((command, index) => {
      const newRow = newTable.insertRow(index + 1);
      const newCell0 = newRow.insertCell(0);
      newCell0.innerText = `${command.cmd}`;
      const newCell1 = newRow.insertCell(1);
      newCell1.innerText = `${command.desc}`;
      const newCell2 = newRow.insertCell(2);
      newCell2.innerText = `${command.usage}`;
    });
    contentsContainer.appendChild(newTable);
  }

  ls(
    contentsContainer: HTMLDivElement,
    curDir: string,
    inputValue: string,
    posts: Post[]
  ) {
    switch (curDir) {
      case "":
        this.renderList(contentsContainer, this.RootFileList);
        break;
      case "/blog":
        const newTable = document.createElement("table");
        const newHeader = newTable.createTHead();
        const headerRow = newHeader.insertRow(0);
        const headerCell0 = headerRow.insertCell(0);
        headerCell0.innerText = "file";
        const headerCell1 = headerRow.insertCell(1);
        headerCell1.innerText = "date";
        const headerCell2 = headerRow.insertCell(2);
        headerCell2.innerText = "subject";
        posts.forEach((post, index) => {
          const newRow = newTable.insertRow(index + 1);
          const newCell0 = newRow.insertCell(0);
          newCell0.innerText = `${index}.md`;
          const newCell1 = newRow.insertCell(1);
          newCell1.innerText = `${post.date}`;
          const newCell2 = newRow.insertCell(2);
          newCell2.innerText = `${post.title}`;
        });
        contentsContainer.appendChild(newTable);
        break;
      default:
        this.renderErrorMsg(contentsContainer, inputValue);
        break;
    }
  }

  cd(
    contentsContainer: HTMLDivElement,
    curDir: string,
    setCurDir: Function,
    command: string
  ) {
    switch (curDir) {
      case "":
        if (command === "cd blog") {
          setCurDir("/blog");
        } else {
          this.pathError(contentsContainer, command, "cd");
        }
        break;
      case "/blog":
        if (command === "cd.." || command === "cd ..") {
          setCurDir("");
        } else {
          this.pathError(contentsContainer, command, "cd");
        }
        break;
    }
  }

  cat(
    contentsContainer: HTMLDivElement,
    curDir: string,
    posts: Post[],
    command: string
  ) {
    const fileName = command.split(" ")[1];
    switch (curDir) {
      case "":
        if (fileName === "about" || fileName === "about.txt") {
          this.renderMarkdown(contentsContainer, this.about);
        } else {
          this.pathError(contentsContainer, command, "cat");
        }
        break;
      case "/blog":
        const indexNumStr = fileName.replaceAll(".md", "");
        let indexNum = parseInt(indexNumStr);
        if (Number.isInteger(parseFloat(indexNumStr))) {
          if (indexNum >= 0 || indexNum < posts.length) {
            const h1 = document.createElement("h1");
            h1.innerText = posts[indexNum].title;
            contentsContainer.appendChild(h1);
            this.render(contentsContainer, "");
            this.renderMarkdown(contentsContainer, posts[indexNum].content);
          } else {
            this.pathError(contentsContainer, command, "cat");
          }
        } else {
          this.pathError(contentsContainer, command, "cat");
        }

        break;
    }
  }

  render(contentsContainer: HTMLDivElement, msg: string, marginTop?: number) {
    const newLine = document.createElement("p");
    newLine.innerText = msg;
    if (marginTop) {
      newLine.style.marginTop = `${marginTop}px`;
    }
    contentsContainer.appendChild(newLine);
  }

  renderErrorMsg(contentsContainer: HTMLDivElement, inputValue: string) {
    const errorMsg = `$ ${inputValue}: command not found. See 'help'.`;
    this.render(contentsContainer, errorMsg);
  }
}