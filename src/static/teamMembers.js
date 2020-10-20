import teamMemberTags from './teamMemberTags'; 

const teamMembers = [
    {
        name: 'Anri', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[0]
    }, 

    {
        name: 'Jenny', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[1]
    }, 

    {
        name: 'Min', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[2]
    }, 

    {
        name: 'Sylvia', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[3]
    }, 

    {
        name: 'Vanessa', 
        description: 'Frontend Developer',
        imageUrl: process.env.PUBLIC_URL + 'assets/Vanessa.png',
        tags: teamMemberTags[4]
    }, 

]; 

export default teamMembers;