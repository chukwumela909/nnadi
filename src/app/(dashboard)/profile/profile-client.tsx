"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  User,
  // Mail,
  Lock,
  Bell,
  Shield,
  Eye,
  EyeOff,
  Camera,
  Save,
  AlertCircle,
  CheckCircle,
  Settings,
  BookOpen,
  // Download,
  Star,
  Calendar,
  //  GraduationCap,
  // Building
} from "lucide-react";

// Mock user data
const userData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@uniport.edu.ng",
  schoolId: "20180001234",
  department: "Computer Science",
  level: "300",
  joinDate: "2023-08-15",
  profileImage: null,
  preferences: {
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    weeklyDigest: true
  },
  stats: {
    booksOwned: 12,
    totalSpent: 2550,
    favoriteCategory: "Computer Science",
    joinedDate: "August 2023"
  }
};

const departments = [
  "Computer Science",
  "Information Management Technology", 
  "Software Engineering",
  "Cybersecurity",
  "Data Science", 
  "Computer Engineering"
];

const levels = ["100", "200", "300", "400", "500", "MSc", "PhD"];

export default function ProfileClient() {
  const [isEditing, setIsEditing] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  
  const [formData, setFormData] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    schoolId: userData.schoolId,
    department: userData.department,
    level: userData.level
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [preferences, setPreferences] = useState(userData.preferences);
  const [isLoading, setIsLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreferenceChange = (key: string, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsEditing(false);
    setSaveMessage("Profile updated successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleSavePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    setSaveMessage("Password updated successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleSavePreferences = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setSaveMessage("Preferences updated successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "preferences", label: "Preferences", icon: Settings }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600 mt-1">
            Manage your account information and preferences
          </p>
        </div>
        
        {saveMessage && (
          <div className="flex items-center space-x-2 text-green-600 mt-4 sm:mt-0">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{saveMessage}</span>
          </div>
        )}
      </div>

      {/* Profile Overview */}
      <Card className="bg-gradient-to-r from-school-blue to-blue-700 text-white">
        <CardContent className="p-6">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                {userData.profileImage ? (
                  <Image 
                    src={userData.profileImage} 
                    alt="Profile"
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-white" />
                )}
              </div>
              <Button 
                size="sm" 
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white text-school-blue hover:bg-gray-100"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                {userData.firstName} {userData.lastName}
              </h2>
              <div className="space-y-1">
                <p className="text-blue-100">{userData.email}</p>
                <p className="text-blue-100">ID: {userData.schoolId}</p>
                <div className="flex items-center space-x-4 mt-3">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {userData.department}
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {userData.level}L
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block text-right">
              <div className="space-y-2 text-blue-100">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{userData.stats.booksOwned} books owned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>{userData.stats.totalSpent.toLocaleString()} credits spent</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {userData.stats.joinedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-school-blue text-school-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "personal" && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Personal Information</CardTitle>
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit"}
            </Button>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="schoolId">School ID</Label>
                <Input
                  id="schoolId"
                  name="schoolId"
                  value={formData.schoolId}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="department">Department</Label>
                <Select 
                  value={formData.department} 
                  onValueChange={(value) => setFormData(prev => ({...prev, department: value}))}
                  disabled={!isEditing}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="level">Academic Level</Label>
                <Select 
                  value={formData.level} 
                  onValueChange={(value) => setFormData(prev => ({...prev, level: value}))}
                  disabled={!isEditing}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {isEditing && (
              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleSaveProfile}
                  disabled={isLoading}
                  className="bg-school-blue hover:bg-blue-700"
                >
                  {isLoading ? (
                    <>
                      <Save className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {activeTab === "security" && (
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">Current Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    type={showCurrentPassword ? "text" : "password"}
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter current password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter new password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    placeholder="Confirm new password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-school-blue mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-gray-900 mb-1">Password Requirements:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• At least 8 characters long</li>
                    <li>• Include uppercase and lowercase letters</li>
                    <li>• Include at least one number</li>
                    <li>• Include at least one special character</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleSavePassword}
                disabled={isLoading || !passwordData.currentPassword || !passwordData.newPassword}
                className="bg-school-blue hover:bg-blue-700"
              >
                {isLoading ? (
                  <>
                    <Save className="w-4 h-4 mr-2 animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 mr-2" />
                    Update Password
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "preferences" && (
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Email Notifications</Label>
                  <p className="text-sm text-gray-600">
                    Receive notifications about your account activity and new books
                  </p>
                </div>
                <Checkbox
                  checked={preferences.emailNotifications}
                  onCheckedChange={(checked) => handlePreferenceChange("emailNotifications", checked as boolean)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Push Notifications</Label>
                  <p className="text-sm text-gray-600">
                    Get real-time notifications in your browser
                  </p>
                </div>
                <Checkbox
                  checked={preferences.pushNotifications}
                  onCheckedChange={(checked) => handlePreferenceChange("pushNotifications", checked as boolean)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Marketing Emails</Label>
                  <p className="text-sm text-gray-600">
                    Receive emails about new features and book recommendations
                  </p>
                </div>
                <Checkbox
                  checked={preferences.marketingEmails}
                  onCheckedChange={(checked) => handlePreferenceChange("marketingEmails", checked as boolean)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-medium">Weekly Digest</Label>
                  <p className="text-sm text-gray-600">
                    Get a weekly summary of your reading activity and new additions
                  </p>
                </div>
                <Checkbox
                  checked={preferences.weeklyDigest}
                  onCheckedChange={(checked) => handlePreferenceChange("weeklyDigest", checked as boolean)}
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleSavePreferences}
                disabled={isLoading}
                className="bg-school-blue hover:bg-blue-700"
              >
                {isLoading ? (
                  <>
                    <Save className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Bell className="w-4 h-4 mr-2" />
                    Save Preferences
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 