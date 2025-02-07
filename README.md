# ForestRacks Translations

Welcome to the repository for markdown translations for the ForestRacks [blog](https://forestracks.com/blog) and [documentation](https://forestracks.com/docs)! Here, you will find comprehensive guides, tutorials, and reference materials to help you navigate through our system effortlessly. Whether you're a beginner or an experienced user, this documentation is made for providing ForestRacks services with the necessary information to maximize client experience.

## Contributing

We believe that collaboration is key to building a comprehensive and up-to-date documentation resource. If you would like to contribute to this repository, we welcome your input! Here's how you can get involved:

### Fork
Start by forking our GitHub repository to create your copy.

### Make Changes
Update or add translations as needed. Ensure your changes are clear, accurate, and consistent with our style. Please use these commonly used examples:

#### Syntax Examples
1. **IP Address**:
When referencing a public IP address, please utilize `192.168.53.72` or `172.16.16.16` as placeholders. These examples ensure that code snippets and demonstrations remain consistent throughout the documentation.

2. **Domain**:
In cases where a domain name is required, we suggest using `<domain>` or `example.com` as placeholders. These placeholders offer a clear distinction and allow clients to easily substitute them with their desired domain names.

#### Component Usage
1. **Code Block**

The Code Block in this documentation allows you to display code snippets with optional line numbering and line highlighting.

Usage:

You can directly use the following syntax to create a code block with line numbers and highlight specific lines:

````plaintext
```javascript:main.js showLineNumbers {3-4}
function isRocketAboutToCrash() {
  // Check if the rocket is stable
  if (!isStable()) {
    NoCrash(); // Prevent the crash
  }
}
```
````

Features:

- **Line Numbers**: Enable line numbers by adding `showLineNumbers` after the opening backticks.
- **Highlight Lines**: Specify lines to highlight using curly braces (e.g., `{2,3-5}`).
- **Syntax Highlighting**: Use the appropriate language for syntax highlighting.



2. **Images**
Images in Markdown are transformed into the Next.js `Image` component. This allows for automatic image optimization, such as lazy loading and resizing, which enhances performance and user experience. Here’s an example:

Markdown:

```markdown
![Alt text for the image](https://forestracks.com/logo.png)
```

Output:

The above Markdown is converted to:

```jsx
<Image
  src="https://forestracks.com/logo.png"
  alt="Alt text for the image"
  width={800}
  height={350}
/>
```

3. **Links**
When you create a link in your Markdown, it is converted to the Next.js `Link` component. This enables client-side navigation and improves loading times. Here’s an example of how a Markdown link is transformed:

Markdown example:

```markdown 
[Visit ForestRacks](https://forestracks.com)
```

Rendered Output:

The above Markdown is converted to:

```jsx
<Link href="https://forestracks.com" target="_blank" rel="noopener noreferrer">
  Visit ForestRacks
</Link>
```

4. **Note**

The `Note` component allows you to display different types of messages such as general notes, warnings, or success notifications. Each type is styled accordingly, providing a clear visual cue to the user.


| Prop    | Type                           | Default | Description                                |
|---------|--------------------------------|---------|--------------------------------------------|
| `title` | `string`                       | "Note"  | Sets the title of the note.                |
| `type`  | `"note"`, `"danger"`, `"warning"`, `"success"` | "note"  | Determines the visual style of the note.   |

Example:

```jsx
<Note type="note" title="Note">
  This is a general note to convey information to the user.
</Note>
<Note type="danger" title="Danger">
  This is a danger alert to notify the user of a critical issue.
</Note>
<Note type="warning" title="Warning">
  This is a warning alert for issues that require attention.
</Note>
<Note type="success" title="Success">
  This is a success message to inform the user of successful actions.
</Note>
```

5. **Steps**

In this guide, we utilize a `Stepper` component, which enables users to display step-by-step instructions directly within the markdown render. 

```jsx
<Stepper>
  <StepperItem title="Step 1: Clone the Translations Repository">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum, felis sed efficitur tincidunt, justo nulla viverra enim, et maximus nunc dolor in lorem.
  </StepperItem>
  <StepperItem title="Step 2: Access the Project Directory">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non neque ut eros auctor accumsan. Mauris a nisl vitae magna ultricies aliquam.
  </StepperItem>
  <StepperItem title="Step 3: Install Required Dependencies">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ipsum nec nulla ultricies porttitor et non justo.
  </StepperItem>
</Stepper>
```

6. **Tabs**

The `Tabs` component allows you to organize content into multiple sections, enabling users to switch between them easily. This is particularly useful for displaying related content in a compact manner.

| Prop        | Type   | Default     | Description                                      |
|-------------|--------|-------------|--------------------------------------------------|
| `defaultValue` | `string` | `null` | The value of the tab that is selected by default. |
| `className` | `string` | `""` | Additional CSS classes for styling the Tabs component. |

Example Tab:

```jsx
<Tabs defaultValue="java" className="pt-5 pb-1">
  <TabsList>
    <TabsTrigger value="java">Java</TabsTrigger>
    <TabsTrigger value="typescript">TypeScript</TabsTrigger>
  </TabsList>
  <TabsContent value="java">
    ```java
    // HelloWorld.java
    public class HelloWorld {
      public static void main(String[] args) {
        System.out.println("Hello, World!");
      }
    }
    ```
  </TabsContent>
  <TabsContent value="typescript">
    ```typescript
    // helloWorld.ts
    function helloWorld(): void {
      console.log("Hello, World!");
    }
    helloWorld();
    ```
  </TabsContent>
</Tabs>
```

7. **Icons**

The `Icon` component allows you to embed custom icons from [popular icon libraries](https://icon-sets.iconify.design/).

Example Icons:
```html
<Icon src="lucide/bell" />
```
This component also supports icons that utilize multiple colors like flags or brand logos:
```html
<Icon src="logos/google-icon" multiColor />
```
Additionally, you can utilize tailwind classes:
```html
<Icon src="fa6-brands/discord" className="mr-2 text-indigo-600" />
```

### Submit a Pull Request
Once you're satisfied with your updates, submit a pull request. It will walk you through out CLA process, our team will review your contribution and merge it into the repository if everything looks good.

### Collaborate
Engage with our community of developers, users, and contributors. Share your knowledge, participate in discussions, and help us improve the translations together.
