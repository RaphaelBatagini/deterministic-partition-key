# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### **Ticket 1:**
As a facility manager I would like to list all agents in the facility shifts to have more information about the professionals booked for my facility.

**Implementation details:**
- Create a method to get distinct agents from facility shifts;
- Create a page to list those agents.

**Acceptance criteria:**
- All agents related to the facility shifts are listed in the agents list page;
- The agents list is paginated;
- Only the facility manager can access this page.

**Time/effort estimate:**
2 days of work

### **Ticket 2:**
As a facility manager I would like to set a custom id for agents to bind them with internal system reference.

**Implementation details:**
- Bind facilities and agents in a new database table with the columns facility id, agent id and custom agent id. Create a unique index using this columns;
- In the facility's agents page, add the option to set a custom id for each agent and save it in the new database table.

**Acceptance criteria:**
- When trying to add a custom id that already exists for the current facility, display an error message;
- The facility manager is able to remove the custom id by letting the custom id field empty;
- Only the facility manager can set a custom id.


**Time/effort estimate:**
2 days of work

### **Ticket 3:**
As an internal system manager I would like to generate the quarter shifts report using facilities custom id.

**Implementation details:**
- Change getShiftsByFacility method to return agent custom id along with other agent metadata;
- Change generateReport method to receive a flag indicating if it should use custom id instead of system internal id;
- In the generate report page, add the option to use or not the facility's agent custom id on the report.

**Acceptance criteria:**
- When generating a report using facility's agent custom id, only display agents custom id
- When generating a report using facility's agent custom id, agents without custom id have the id column empty;
- When generating a report without using facility's agent custom id, no custom id is displayed.


**Time/effort estimate:**
1 day of work