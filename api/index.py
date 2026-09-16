import sys
import os

# Add InterviewPrep directory to Python path
interview_prep_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'InterviewPrep'))
if interview_prep_dir not in sys.path:
    sys.path.insert(0, interview_prep_dir)

from app import app
