# Todo App

Dies ist eine einfache Todo-App, die in **React** mit **TypeScript** erstellt wurde. Sie bietet grundlegende Funktionen wie das Hinzufügen, Bearbeiten, Löschen und Filtern von Todos. Die Todos werden im **localStorage** gespeichert, sodass sie beim Neuladen der Seite erhalten bleiben.

## Funktionen

- **Hinzufügen von Todos**: Benutzer können neue Todos mit einer Beschreibung hinzufügen.
- **Erledigen von Todos**: Ein Todo kann als "erledigt" markiert werden.
- **Bearbeiten von Todos**: Bestehende Todos können bearbeitet werden.
- **Löschen von Todos**: Ein Todo kann gelöscht werden.
- **Filtern von Todos**: Es gibt Filteroptionen für alle, erledigte und offene Todos.
- **Persistenz mit localStorage**: Alle Todos werden im localStorage gespeichert, damit sie nach dem Neuladen der Seite erhalten bleiben.

## Technologien

- **React**: Frontend-Framework für die UI-Entwicklung.
- **TypeScript**: Für typsicheres JavaScript.
- **localStorage**: Zum Speichern der Todos im Browser.

## Installation

Um das Projekt lokal auszuführen, folge diesen Schritten:

1. **Repository klonen**:

   ```bash
   git clone https://github.com/dein-benutzername/todo-app.git
   cd todo-app

   ```

2. **Abhängigkeiten installieren**:

Stelle sicher, dass Node.js und npm installiert sind. Führe dann den folgenden Befehl aus:

    ```bash
    npm install
    ```

3. **App starten**

Verwende den folgenden Befehl, um die App in der Entwicklungsumgebung zu starten:

    ```bash
    npm start
    ```

##App-Struktur

Die App besteht aus den folgenden Hauptkomponenten:

1. Todos.tsx

Diese Komponente enthält die Hauptlogik der Anwendung:

    Zustandsverwaltung für die Todos und die Filteroptionen.
    useState und useEffect werden verwendet, um den Zustand der Todos zu speichern und zu laden.
    Funktionen wie handleAddTodo, handleOnEdit, handleOnDelete, und handleIsCompleted verwalten die Todo-Aktionen.
    Die Todos werden nach Erledigungsstatus sortiert und je nach Filteroption gefiltert.

2. CreateTodo.tsx

Eine Komponente, die ein Formular bereitstellt, um neue Todos hinzuzufügen.

    Ruft die Funktion handleAddTodo auf, um ein neues Todo in den Zustand und in den localStorage hinzuzufügen.

3. Search.tsx

Eine Komponente zum Filtern der Todos nach Status (alle, erledigte, offene):

    Enthält klickbare Spans zur Auswahl der Filteroptionen.
    Übergibt die Filteroption über die Props an die Todos-Komponente.

4. Todo.tsx

Diese Komponente stellt ein einzelnes Todo dar:

    Beinhaltet Aktionen wie das Markieren als erledigt, Bearbeiten und Löschen.
    Ruft entsprechende Callback-Funktionen aus der Todos-Komponente auf.

Filterlogik

Die Filterung der Todos basiert auf der filteredOption im Zustand der Todos.tsx:

    Alle: Zeigt alle Todos an.
    Erledigte: Zeigt nur die Todos an, die als erledigt markiert wurden.
    Offene: Zeigt nur die nicht erledigten Todos an.

Die Filterung erfolgt durch diese Logik:

    ```bash
    const filteredTodos = todos.filter(todo => {

    if (filteredOption === 'completed') {
    return todo.isCompleted;
    } else if (filteredOption === 'incompleted') {
    return !todo.isCompleted;
    }
    return true; // Wenn 'all' ausgewählt ist
    });
    ```
