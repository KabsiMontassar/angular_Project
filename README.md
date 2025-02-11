# Angular Project Documentation

## Project Overview
This Angular project is designed to manage and display residences and apartments. It includes a navigation system with a header and footer, and various components for handling residences and apartments.

## Components
- **AppComponent**: The root component of the application.
- **HeaderComponent**: Contains navigation links to Home and Residences.
- **FooterComponent**: Displays footer information.
- **HomeComponent**: Displays a list of residences.
- **NotFoundComponent**: Displays a message for invalid routes.
- **ResidencesComponent**: Manages the list of residences and navigation to details.
- **ResidenceDetailsComponent**: Displays detailed information about a selected residence.
- **AddResidenceComponent**: Provides a form for adding or updating a residence.
- **ApartmentsComponent**: Displays a list of apartments.
- **ApartmentsByResidenceComponent**: Displays apartments filtered by residence.
- **AddApartmentComponent**: Provides a form for adding a new apartment.

## Routing
The application uses Angular's routing module to navigate between components. The following routes are defined:
- Home: Displays the HomeComponent.
- Residences: Displays the ResidencesComponent.
- Residence Details: Displays the ResidenceDetailsComponent.
- Add Residence: Displays the AddResidenceComponent.
- Apartments: Displays the ApartmentsComponent.
- Apartments by Residence: Displays the ApartmentsByResidenceComponent.
- Not Found: Displays the NotFoundComponent for invalid routes.

## Assets
Images used in the application are stored in the `src/assets/images` directory.

## Environment Configuration
Environment-specific settings are defined in:
- `src/environments/environment.ts`: Development settings.
- `src/environments/environment.prod.ts`: Production settings.

## Build and Development
To run the application, use the Angular CLI commands:
- `ng serve`: Starts the development server.
- `ng build`: Compiles the application into an output directory.

## Dependencies
The project dependencies are listed in the `package.json` file. Make sure to install them using:
- `npm install`

## TypeScript Configuration
The TypeScript compiler options and files to include in the compilation are specified in the `tsconfig.json` file.

## Conclusion
This project provides a comprehensive structure for managing residences and apartments using Angular. It is designed to be user-friendly and easy to navigate.