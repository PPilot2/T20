import React, { useState } from 'react';
import Select from 'react-select';

const majorOptions = [
    {
      "label": "Agriculture & Natural Resources Conservation",
      "options": [
        { "value": "Agriculture, General", "label": "Agriculture, General" },
        { "value": "Agribusiness Operations", "label": "Agribusiness Operations" },
        { "value": "Agricultural Business & Management", "label": "Agricultural Business & Management" },
        { "value": "Agricultural Economics", "label": "Agricultural Economics" },
        { "value": "Agricultural Mechanization", "label": "Agricultural Mechanization" },
        { "value": "Agricultural Production", "label": "Agricultural Production" },
        { "value": "Agronomy & Crop Science", "label": "Agronomy & Crop Science" },
        { "value": "Animal Sciences", "label": "Animal Sciences" },
        { "value": "Food Sciences & Technology", "label": "Food Sciences & Technology" },
        { "value": "Horticulture Operations & Management", "label": "Horticulture Operations & Management" },
        { "value": "Horticulture Science", "label": "Horticulture Science" },
        { "value": "Natural Resources Conservation, General", "label": "Natural Resources Conservation, General" },
        { "value": "Environmental Science", "label": "Environmental Science" },
        { "value": "Forestry", "label": "Forestry" },
        { "value": "Natural Resources Management", "label": "Natural Resources Management" },
        { "value": "Wildlife & Wildlands Management", "label": "Wildlife & Wildlands Management" }
      ]
    },
    {
      "label": "Architecture",
      "options": [
        { "value": "Architecture, General", "label": "Architecture, General" },
        { "value": "Architectural Environmental Design", "label": "Architectural Environmental Design" },
        { "value": "City/Urban/Regional Planning", "label": "City/Urban/Regional Planning" },
        { "value": "Interior Architecture", "label": "Interior Architecture" },
        { "value": "Landscape Architecture", "label": "Landscape Architecture" }
      ]
    },
    {
      "label": "Area, Ethnic, and Multidisciplinary Studies",
      "options": [
        { "value": "Area Studies, General (e.g., African, Middle Eastern)", "label": "Area Studies, General (e.g., African, Middle Eastern)" },
        { "value": "Asian Area Studies", "label": "Asian Area Studies" },
        { "value": "European Area Studies", "label": "European Area Studies" },
        { "value": "Latin American Area Studies", "label": "Latin American Area Studies" },
        { "value": "North American Area Studies", "label": "North American Area Studies" },
        { "value": "Ethnic & Minority Studies, General", "label": "Ethnic & Minority Studies, General" },
        { "value": "African American Studies", "label": "African American Studies" },
        { "value": "American Indian/Native American Studies", "label": "American Indian/Native American Studies" },
        { "value": "Latino/Chicano Studies", "label": "Latino/Chicano Studies" },
        { "value": "Women's Studies", "label": "Women's Studies" },
        { "value": "Liberal Arts & General Studies", "label": "Liberal Arts & General Studies" },
        { "value": "Library Science", "label": "Library Science" },
        { "value": "Multi/Interdisciplinary Studies", "label": "Multi/Interdisciplinary Studies" }
      ]
    },
    {
      "label": "Arts: Visual & Performing",
      "options": [
        { "value": "Art, General", "label": "Art, General" },
        { "value": "Art History, Criticism & Conservation", "label": "Art History, Criticism & Conservation" },
        { "value": "Fine/Studio Arts", "label": "Fine/Studio Arts" },
        { "value": "Cinema/Film", "label": "Cinema/Film" },
        { "value": "Cinematography/Film/Video Production", "label": "Cinematography/Film/Video Production" },
        { "value": "Dance", "label": "Dance" },
        { "value": "Design & Visual Communications, General", "label": "Design & Visual Communications, General" },
        { "value": "Fashion/Apparel Design", "label": "Fashion/Apparel Design" },
        { "value": "Graphic Design", "label": "Graphic Design" },
        { "value": "Industrial Design", "label": "Industrial Design" },
        { "value": "Interior Design", "label": "Interior Design" },
        { "value": "Music, General", "label": "Music, General" },
        { "value": "Music, Performance", "label": "Music, Performance" },
        { "value": "Music, Theory & Composition", "label": "Music, Theory & Composition" },
        { "value": "Photography", "label": "Photography" },
        { "value": "Theatre Arts/Drama", "label": "Theatre Arts/Drama" }
      ]
    },
    {
      "label": "Business",
      "options": [
        { "value": "Accounting", "label": "Accounting" },
        { "value": "Accounting Technician", "label": "Accounting Technician" },
        { "value": "Business Administration & Management, General", "label": "Business Administration & Management, General" },
        { "value": "Hotel/Motel Management", "label": "Hotel/Motel Management" },
        { "value": "Human Resources Development/Training", "label": "Human Resources Development/Training" },
        { "value": "Human Resources Management", "label": "Human Resources Management" },
        { "value": "International Business Management", "label": "International Business Management" },
        { "value": "Labor/Industrial Relations", "label": "Labor/Industrial Relations" },
        { "value": "Logistics & Materials Management", "label": "Logistics & Materials Management" },
        { "value": "Marketing Management & Research", "label": "Marketing Management & Research" },
        { "value": "Office Supervision & Management", "label": "Office Supervision & Management" },
        { "value": "Operations Management & Supervision", "label": "Operations Management & Supervision" },
        { "value": "Organizational Behavior", "label": "Organizational Behavior" },
        { "value": "Purchasing/Procurement/Contracts Management", "label": "Purchasing/Procurement/Contracts Management" },
        { "value": "Restaurant/Food Services Management", "label": "Restaurant/Food Services Management" },
        { "value": "Small Business Management/Operations", "label": "Small Business Management/Operations" },
        { "value": "Travel/Tourism Management", "label": "Travel/Tourism Management" },
        { "value": "Business/Management Quantitative Methods, General", "label": "Business/Management Quantitative Methods, General" },
        { "value": "Actuarial Science", "label": "Actuarial Science" },
        { "value": "Business/Managerial Economics", "label": "Business/Managerial Economics" },
        { "value": "Finance, General", "label": "Finance, General" },
        { "value": "Banking & Financial Support Services", "label": "Banking & Financial Support Services" },
        { "value": "Financial Planning & Services", "label": "Financial Planning & Services" },
        { "value": "Insurance & Risk Management", "label": "Insurance & Risk Management" },
        { "value": "Investments & Securities", "label": "Investments & Securities" },
        { "value": "Management Information Systems", "label": "Management Information Systems" },
        { "value": "Real Estate", "label": "Real Estate" },
        { "value": "Sales, Merchandising, & Marketing, General", "label": "Sales, Merchandising, & Marketing, General" },
        { "value": "Fashion Merchandising", "label": "Fashion Merchandising" },
        { "value": "Tourism & Travel Marketing", "label": "Tourism & Travel Marketing" },
        { "value": "Secretarial Studies & Office Administration", "label": "Secretarial Studies & Office Administration" }
      ]
    },{
        "label": "Communications & Media",
        "options": [
          { "value": "Communications, General", "label": "Communications, General" },
          { "value": "Communication Studies", "label": "Communication Studies" },
          { "value": "Journalism", "label": "Journalism" },
          { "value": "Public Relations", "label": "Public Relations" },
          { "value": "Radio, Television, & Digital Communication", "label": "Radio, Television, & Digital Communication" },
          { "value": "Advertising", "label": "Advertising" },
          { "value": "Broadcast Journalism", "label": "Broadcast Journalism" },
          { "value": "Film & Video Production", "label": "Film & Video Production" },
          { "value": "Photography", "label": "Photography" },
          { "value": "Graphic Communications", "label": "Graphic Communications" },
          { "value": "Publishing", "label": "Publishing" },
          { "value": "Speech Communication", "label": "Speech Communication" }
        ]
      },
      {
        "label": "Computer & Information Sciences",
        "options": [
          { "value": "Computer Science, General", "label": "Computer Science, General" },
          { "value": "Software Engineering", "label": "Software Engineering" },
          { "value": "Computer Programming", "label": "Computer Programming" },
          { "value": "Computer Networking", "label": "Computer Networking" },
          { "value": "Cybersecurity", "label": "Cybersecurity" },
          { "value": "Database Administration", "label": "Database Administration" },
          { "value": "Computer Systems Analysis", "label": "Computer Systems Analysis" },
          { "value": "Information Technology", "label": "Information Technology" },
          { "value": "Web Development", "label": "Web Development" },
          { "value": "Data Science", "label": "Data Science" },
          { "value": "Artificial Intelligence", "label": "Artificial Intelligence" },
          { "value": "Game Development", "label": "Game Development" },
          { "value": "Digital Media", "label": "Digital Media" }
        ]
      },
      {
        "label": "Education",
        "options": [
          { "value": "Education, General", "label": "Education, General" },
          { "value": "Early Childhood Education", "label": "Early Childhood Education" },
          { "value": "Elementary Education", "label": "Elementary Education" },
          { "value": "Secondary Education", "label": "Secondary Education" },
          { "value": "Special Education", "label": "Special Education" },
          { "value": "Teacher Education, Multiple Levels", "label": "Teacher Education, Multiple Levels" },
          { "value": "Educational Leadership & Administration", "label": "Educational Leadership & Administration" },
          { "value": "Higher Education Administration", "label": "Higher Education Administration" },
          { "value": "Curriculum & Instruction", "label": "Curriculum & Instruction" },
          { "value": "School Counseling", "label": "School Counseling" },
          { "value": "Instructional Design", "label": "Instructional Design" },
          { "value": "Adult & Continuing Education", "label": "Adult & Continuing Education" }
        ]
      },
      {
        "label": "Engineering & Architecture",
        "options": [
          { "value": "Engineering, General", "label": "Engineering, General" },
          { "value": "Civil Engineering", "label": "Civil Engineering" },
          { "value": "Mechanical Engineering", "label": "Mechanical Engineering" },
          { "value": "Electrical Engineering", "label": "Electrical Engineering" },
          { "value": "Aerospace Engineering", "label": "Aerospace Engineering" },
          { "value": "Chemical Engineering", "label": "Chemical Engineering" },
          { "value": "Environmental Engineering", "label": "Environmental Engineering" },
          { "value": "Industrial Engineering", "label": "Industrial Engineering" },
          { "value": "Biotechnology", "label": "Biotechnology" },
          { "value": "Computer Engineering", "label": "Computer Engineering" },
          { "value": "Engineering Physics", "label": "Engineering Physics" },
          { "value": "Nuclear Engineering", "label": "Nuclear Engineering" },
          { "value": "Engineering Technology, General", "label": "Engineering Technology, General" },
          { "value": "Construction Management", "label": "Construction Management" },
          { "value": "Architecture", "label": "Architecture" },
          { "value": "Landscape Architecture", "label": "Landscape Architecture" },
          { "value": "Urban Planning", "label": "Urban Planning" }
        ]
      },
      {
        "label": "Health Professions",
        "options": [
          { "value": "Health Professions, General", "label": "Health Professions, General" },
          { "value": "Nursing", "label": "Nursing" },
          { "value": "Physical Therapy", "label": "Physical Therapy" },
          { "value": "Occupational Therapy", "label": "Occupational Therapy" },
          { "value": "Physician Assistant", "label": "Physician Assistant" },
          { "value": "Dental Hygiene", "label": "Dental Hygiene" },
          { "value": "Emergency Medical Technology", "label": "Emergency Medical Technology" },
          { "value": "Medical Laboratory Technician", "label": "Medical Laboratory Technician" },
          { "value": "Radiologic Technology", "label": "Radiologic Technology" },
          { "value": "Veterinary Technology", "label": "Veterinary Technology" },
          { "value": "Public Health", "label": "Public Health" },
          { "value": "Nutrition", "label": "Nutrition" },
          { "value": "Healthcare Administration", "label": "Healthcare Administration" },
          { "value": "Pharmacy", "label": "Pharmacy" }
        ]
      },
      {
        "label": "Humanities & Social Sciences",
        "options": [
          { "value": "History", "label": "History" },
          { "value": "Philosophy", "label": "Philosophy" },
          { "value": "English Language & Literature", "label": "English Language & Literature" },
          { "value": "Linguistics", "label": "Linguistics" },
          { "value": "Psychology", "label": "Psychology" },
          { "value": "Sociology", "label": "Sociology" },
          { "value": "Political Science", "label": "Political Science" },
          { "value": "Anthropology", "label": "Anthropology" },
          { "value": "Economics", "label": "Economics" },
          { "value": "Criminal Justice", "label": "Criminal Justice" },
          { "value": "Social Work", "label": "Social Work" },
          { "value": "Law", "label": "Law" },
          { "value": "Geography", "label": "Geography" },
          { "value": "Religious Studies", "label": "Religious Studies" }
        ]
      },
      {
        "label": "Science & Technology",
        "options": [
          { "value": "Biology", "label": "Biology" },
          { "value": "Chemistry", "label": "Chemistry" },
          { "value": "Physics", "label": "Physics" },
          { "value": "Mathematics", "label": "Mathematics" },
          { "value": "Astronomy", "label": "Astronomy" },
          { "value": "Geology", "label": "Geology" },
          { "value": "Environmental Science", "label": "Environmental Science" },
          { "value": "Genetics", "label": "Genetics" },
          { "value": "Biochemistry", "label": "Biochemistry" },
          { "value": "Microbiology", "label": "Microbiology" },
          { "value": "Neuroscience", "label": "Neuroscience" },
          { "value": "Marine Biology", "label": "Marine Biology" },
          { "value": "Psychobiology", "label": "Psychobiology" }
        ]
      }
    ]
const MajorSelector = () => {
  const [selectedMajor, setSelectedMajor] = useState(null);

  const handleChange = selectedOption => {
    setSelectedMajor(selectedOption);
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">Select Major</label>
      <Select
        value={selectedMajor}
        onChange={handleChange}
        options={majorOptions}
        isSearchable
        placeholder="Search and select a major"
        className="w-full max-h-60 "
      />
    </div>
  );
};

export default MajorSelector;
